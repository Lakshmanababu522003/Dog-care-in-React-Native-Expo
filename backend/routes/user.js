const router = require('express').Router();
const User =require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = 'lachurules';

router.route('/read').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("errror:" +err));
})

router.route('/signup').post(async (req, res) => {
    const {username, phoneno, address, dname, email, password } = req.body;

    try {
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create a new user instance with the hashed password
        const newUser = new User({
            username,
            phoneno,
            address,
            dname,
            email,
            password: hashedPassword // Store the hashed password
        });

        // Save the user to the database
        await newUser.save();

        res.json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.route('/login').post(async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the username exists in the database
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Compare the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // If the username and password are correct, generate a JWT token
        const token = jwt.sign(
            { id: user.studentId },
            secretKey , // Use a secret key for token generation
            { expiresIn: '1h' } // Token expiration time
        );

        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                department: user.department,
                semester: user.semester,
                email: user.email
                // Add any other user data you want to include in the response
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then (() => res.json('User Deleted'))
    .catch(err => res.status(400).json("errror:" +err))
})

router.route('/update/:id').post((req,res) =>{
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username;
        user.password = req.body.password;

        user.save()
        .then (() => res.json("user Updated"))
        .catch(err => res.status(400).json("errror:" +err))

    })

    .catch(err => res.status(400).json("errror:" +err))
})

module.exports = router;