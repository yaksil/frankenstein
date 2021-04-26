const mongoose = require('mongoose');

const artisan = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, // the man behind the artist KInD OF,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        default: "Green Man",
        required: true
    },
    location: {
        type: String,
        default: "in the middle of nowhere",
        required: true
    },
    description: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model("Artisan", artisan, 'Artisans');