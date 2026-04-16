const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Feedback = require('./models/Feedback');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/studentFeedbackDB')
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

// Route: Show Form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route: Handle Submission
app.post('/submit-feedback', async (req, res) => {
    try {
        const newFeedback = new Feedback(req.body);
        await newFeedback.save();
        res.send(`
            <div style="text-align:center; padding:50px; font-family:sans-serif;">
                <h1 style="color:green;">Feedback Submitted!</h1>
                <p>Thank you for your response.</p>
                <a href="/">Go Back</a>
            </div>
        `);
    } catch (err) {
        res.status(500).send("Error saving feedback.");
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Website live at http://localhost:${PORT}`);
});