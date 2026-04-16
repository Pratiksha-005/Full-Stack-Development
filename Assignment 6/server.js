const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import Models
const Contact = require('./models/Contact'); 
const Product = require('./models/Product'); // New Product model

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB') // Changed DB name to ecommerceDB
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Connection error:', err));

// Route: Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route: Handle Contact Form (Old logic)
app.post('/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.send("<h1>Contact Saved!</h1><a href='/'>Go Back</a>");
    } catch (err) {
        res.status(500).send("Error saving contact.");
    }
});

// Route: Handle Product Sales (New E-commerce logic)
app.post('/sell', async (req, res) => {
    try {
        console.log("New Item Received:", req.body);
        
        const newItem = new Product({
            title: req.body.title,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            sellerName: req.body.sellerName,
            sellerContact: req.body.sellerContact
        });

        await newItem.save(); // Saves Car/Bike to Database
        
        res.send(`
            <div style="text-align:center; margin-top:50px; font-family:Arial;">
                <h1 style="color:blue;">Item Posted!</h1>
                <p>Your item is now listed for sale.</p>
                <a href="/">Post another item</a>
            </div>
        `);
    } catch (err) {
        console.error("Save Error:", err);
        res.status(500).send("Failed to list the item.");
    }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});