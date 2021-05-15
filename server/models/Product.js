const mongoose = require('mongoose');

const product = new mongoose.Schema({
    title: {
        type: String,
        default: '',
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    images: [String], //array of paths i guess
    mainImage: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: '',
    },
    artisan: {
        type: mongoose.Schema.Types.ObjectId, //references artisan? represents a store basically
        ref: 'Artisan',
    },
    price: {
        type: Number,
        default: 0,
    },
    in_stock: {
      type: Number,
      default: 0
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    stars: {
        type: Number,
        default: 0
    },
    available: {
        type: Boolean,
    },
    date_created: {
        type: mongoose.Schema.Types.Date,
        default: new Date(),
    }
})

module.exports = mongoose.model("Product", product, 'Products');