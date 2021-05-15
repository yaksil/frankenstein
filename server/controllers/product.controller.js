const genController = require('./gen.controller');
const boom = require('@hapi/boom');
const mongoose = require('mongoose');
const {Product}  = require('../models/_index');


module.exports = {
    // function is not a function what the fuck
    ...genController(Product),
    // override functions here
    async getByArtisan(req, res) {
        try {
            console.log(req.query)
            console.log(req.query.artisan)
            const items = await Product.find({artisan: "609ed4202e9d5026d8b72e42"})
            return res.status(200).json(items)
        } catch (e) {
            return res.status(400).send(boom.boomify(e))
        }
    }
}