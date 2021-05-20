const mongoose = require('mongoose');

const product = new mongoose.Schema({
    title: {
        type: String,
        default: '',
    },

    category_id: {
        type: String,
        ref: 'Category'
    },
    artisan_id: {
        type: String, //references artisan? represents a store basically
        ref: 'Artisan',
    },

    images: [String], //array of paths i guess
    thumbs: [String],
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
        default: 0,
    },
    in_stock: {
        type: Number,
        default: 0
    },

    reviews: [{
        type: String,
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