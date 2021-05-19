const mongoose = require('mongoose')

const cart = new mongoose.Schema({
    user_id: {
        type: String,
        ref: 'User',
        required: true
    },
    // represents ........... wait a fucking moment
    // TODO archiving orders?
    // true as active order, false as inactive == completed as archived or cancelled
    // 'tis not even a feature yet
    state: {
        type: String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active'
    },

    // make it eh product refs for now
    // idk how it's gonna work anyways
    items: [{
        type: String,
        ref: 'Product',
        required: true
    }],

    // shipping info b like
    shipping: {
        type: String
    },

    //counted as whatever
    discounts: [{
        type: Number
    }],

    // TODO maths to subtract discounts from subtotal -- maybe as a function tho
    total: {
        type: String
    }
})

module.exports = mongoose.model('Cart', cart, 'Carts')