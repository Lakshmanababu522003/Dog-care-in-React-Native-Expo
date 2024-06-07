const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointSchema = new Schema({
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
    dname: {
        type: String,
        required: true,
        minlength: 3
    },
    appointdate:{
        type:Date,
        required:true
    }

}, {
    timestamps: true
});

const Appoint = mongoose.model('appoint', appointSchema);

module.exports = Appoint;
