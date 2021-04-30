const mongoose = require('mongoose')

const user = new mongoose.Schema({
    auth: {
        login: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    },
    contacts: {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            default: ''
        },
        mail_address: {
            type: String,
            default: ''
        },
        fullname: {
            type: String,
            default: ''
        }
    },
    //billing: {} // TODO billing model, check contacts on creating order
})

module.exports = mongoose.model("User", user, "Users")