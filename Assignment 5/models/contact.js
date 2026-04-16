const mongoose = require('mongoose');

// Define the structure of the data to be saved in the database
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
        default: Date.now // Automatically saves the current date and time
    }
});

// Export the model so server.js can use it to create new entries
module.exports = mongoose.model('Contact', contactSchema);