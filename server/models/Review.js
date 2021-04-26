const mongoose = require('mongoose')

const review = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
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