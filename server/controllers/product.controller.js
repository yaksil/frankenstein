const genController = require('./gen.controller');
const boom = require('@hapi/boom');
const {Product}  = require('../models/_index');

module.exports = {
    // function is not a function what the fuck
    ...genController(Product),
    // override functions here
    async getByArtisan(req, res) {
        try {
            const items = await Product.find({artisan: req.query.artisan})
            return res.status(200).json(items)
        } catch (e) {
            return res.status(400).send(boom.boomify(e))
        }
    }
}