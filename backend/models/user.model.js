const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true // Ensure studentId is unique
      },
    phoneno: {
        type: String,
        required: true,
        minlength: 3
    },
    address: {
        type: String,
        required: true,
        minlength: 3
    },
    dname: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },

}, {
    timestamps: true
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
