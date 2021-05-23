const mongoose = require('mongoose')

const token = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Token", token, "Tokens")