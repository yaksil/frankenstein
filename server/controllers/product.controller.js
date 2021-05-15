const genController = require('./gen.controller');
const boom = require('@hapi/boom');
const {Product} = require('../models/_index');

module.exports = {
    // function is not a function what the fuck
    ...genController(Product),
    // override functions here
    async getProductsArray() {

    }
}