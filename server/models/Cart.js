const mongoose = require('mongoose')

const cart = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // represents ........... wait a fucking moment
    // TODO archiving orders?
    // true as active order, false as inactive == completed as archived or cancelled
    // 'tis not even a feature yet
    state: {
        type: mongoose.Schema.Types.String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active'
    },

    // make it eh product refs for now
    // idk how it's gonna work anyways
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],

    // shipping info b like
    shipping: {
        type: mongoose.Schema.Types.String
    },

    //counted as whatever
    discounts: [{
        type: mongoose.Schema.Types.Number
    }],

    // TODO maths to subtract discounts from subtotal -- maybe as a function tho
    total: {
        type: mongoose.Schema.Types.Number
    }
})

module.exports = mongoose.model('Cart', cart, 'Carts')