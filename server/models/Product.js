const mongoose = require('mongoose');

const product = new mongoose.Schema({
    title: {
        type: String,
        default: '',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    images: [String], //array of paths i guess
    mainImage: {
        type: String,
        required: true,
        default: ''
    },
    description: {
        type: String,
        default: '',
        required: true
    },
    artisan: {
        type: mongoose.Schema.Types.ObjectId, //references artisan? represents a store basically
        ref: 'Artisan',
        required: true
    },
    price: Number,
    in_stock: Number,
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
        required: true
    },
    date_created: {
        type: mongoose.Schema.Types.Date,
        // TODO set def date as created
    },
    date_modified: {
        type: mongoose.Schema.Types.Date,
        // TODO as date modified ehhhhh
    }
})

module.exports = mongoose.model("Product", product, 'Products');