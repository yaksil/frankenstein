const mongoose = require('mongoose')

const category = new mongoose.Schema({
    cat_name: {
        type: String,
        required: true
    },
    cat_desc: {
        type: String,
        required: true
    },
    products: [{
        type: String,
        ref: 'Product'
    }]
})

module.exports = mongoose.model('Category', category, 'Categories')