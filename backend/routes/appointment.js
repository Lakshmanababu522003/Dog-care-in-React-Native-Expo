const router = require('express').Router();
const Appoint = require('../models/appoint.model');

router.route('/add').post(async (req, res) => {
    const { username, phoneno, dname, appointdate } = req.body;

    try {
        // Create a new instance of the Appoint model with the provided data
        const newAppointment = new Appoint({
            username: username,
            phoneno: phoneno,
            dname: dname,
            appointdate: appointdate
        });

        // Save the new appointment to the database
        const savedAppointment = await newAppointment.save();

        // Success: Return the saved appointment data
        res.json({ "status": true, "data": savedAppointment });
    } catch (error) {
        // Error: Return the error
        console.error(error);
        res.status(500).json({ "status": false, "data": error.message });
    }
});

router.route('/read').get((req,res) => {
    Appoint.find()
    .then(appoints => res.json(appoints))
    .catch(err => res.status(400).json("errror:" +err));
})

module.exports = router;
