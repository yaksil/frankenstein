const mongoose = require('mongoose');

const product = new mongoose.Schema({
    title: {
        type: String,
        default: '',
    },

    category_id: {
        type: String,
        default: '',
        ref: 'Category'
    },
    artisan_id: {
        type: String, //references artisan? represents a store basically
        default: '',
        ref: 'Artisan',
    },

    images: [{
        type: String,
        default: '',
    }], //array of paths i guess

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
        default: '',
        ref: 'Review'
    }],

    stars: {
        type: Number,
        default: 0
    },
    available: {
        type: Boolean,
        default: false
    },

    date_created: {
        type: mongoose.Schema.Types.Date,
        default: new Date(),
    }
})

module.exports = mongoose.model("Product", product, 'Products');