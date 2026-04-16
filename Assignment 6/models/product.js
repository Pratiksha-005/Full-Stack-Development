const mongoose = require('mongoose');

// Schema for used items like Cars and Bikes
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String, // Car or Bike
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sellerName: {
        type: String,
        required: true
    },
    sellerContact: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);