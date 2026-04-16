const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import the Contact schema from the models folder
const Contact = require('./models/Contact'); 

const app = express();

// Middleware configuration
app.use(cors());
app.use(express.json());

// IMPORTANT: This line allows Express to read data sent from an HTML form
app.use(express.urlencoded({ extended: true })); 

// Serves your static files (HTML, CSS, Images) from the public folder
app.use(express.static('public'));

// MongoDB Connection string
mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB')
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Connection error:', err));

// GET Route: Serves your main portfolio page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST Route: This handles the data when you click "Submit" on the contact form
app.post('/contact', async (req, res) => {
    try {
        console.log("Form data received by server:", req.body);
        
        // Creating a new instance of the Contact model with the form data
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        // Saving the data into the MongoDB collection
        await newContact.save(); 
        
        // Response sent to the user after successful submission
        res.send(`
            <div style="text-align:center; margin-top:50px; font-family:Arial;">
                <h1 style="color:green;">Success!</h1>
                <p>Your message has been saved to the database.</p>
                <a href="/">Go Back to Portfolio</a>
            </div>
        `);
    } catch (err) {
        console.error("Database Save Error:", err);
        res.status(500).send("Failed to save data to the database.");
    }
});

// Server Initialization
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});