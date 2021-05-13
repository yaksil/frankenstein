const mongoose = require('mongoose');

const product = new mongoose.Schema({
    title: {
        type: String,
        default: '',
    },
    mainImage: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Product", product, 'Products');