const mongoose = require('mongoose')

const review = new mongoose.Schema({
    user_id: {
        type: String,
        ref: 'User',
    },
    product_id: {
      type: String,
      ref: 'Product', required: true
    },
    review_rating: {
        type: Number,
        required: true
    },
    review_body: {
        type: String,
        default: 'Нет слов, одни эмоции.'
    }
})

module.exports = mongoose.model('Review', review, 'Reviews')