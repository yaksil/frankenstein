const genController = require('./gen.controller');
const boom = require('@hapi/boom');
const {Product} = require('../models/_index');

module.exports = {
    // function is not a function what the fuck
    ...genController(Product),
    // override functions here
    async getByArtisan(req, res) {
        try {
            const items = await Product.find({artisan: req.params("art")});
            return res.status(200).json(items);
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    }
}