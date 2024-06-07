const router = require('express').Router();
const Admin =require('../models/admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = 'lachurules';

router.route('/signup').post(async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists in the database
        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create a new user instance with the hashed password
        const newAdmin = new Admin({
    
            email,
            password: hashedPassword // Store the hashed password
        });

        // Save the user to the database
        await newAdmin.save();
        // delete newAdmin['password']
        const resData={
        "email":newAdmin.email,
        "_id": newAdmin._id,
        "createdAt": newAdmin.createdAt,
        "updatedAt": newAdmin.updatedAt,
        }
        // _omit.

        res.json({ message: 'Admin created successfully' ,data:resData});
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.route('/login').post(async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the username exists in the database
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Compare the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // If the username and password are correct, generate a JWT token
        const token = jwt.sign(
            { id: admin._id },
            secretKey , // Use a secret key for token generation
            { expiresIn: '1h' } // Token expiration time
        );

        res.json({
            token,
            admin: {
                id: admin._id,
                email: admin.email
                // Add any other user data you want to include in the response
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;