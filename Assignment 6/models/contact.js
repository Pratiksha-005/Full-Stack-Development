const mongoose = require('mongoose');

// Schema for storing user messages/inquiries
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now // Automatically saves the date of inquiry
    }
});

// Exporting the model so it can be used in server.js
module.exports = mongoose.model('Contact', contactSchema);