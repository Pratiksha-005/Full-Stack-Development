const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    studentName: String,
    course: String,
    rating: Number,
    comments: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);