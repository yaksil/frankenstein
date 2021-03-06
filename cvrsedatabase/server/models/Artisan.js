const mongoose = require('mongoose');

const artisan = new mongoose.Schema({
    avatar: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: "Green Man",
    },
    location: {
        type: String,
        default: "in the middle of nowhere",
    },
    description: {
        type: String,
        default: ''
    },
    inventory: [{
        type: String,
        ref: 'Product'
    }],
    user_id: {
        type: String, // the man behind the artist KInD OF,
        ref: 'User',
    },
})

module.exports = mongoose.model("Artisan", artisan, 'Artisans');