const genController = require('./gen.controller');
const boom = require('@hapi/boom');
const {Product}  = require('../models/_index');

const relations = {
    getById: ['category_id', 'artisan_id', 'reviews']
}

module.exports = {
    // function is not a function what the fuck
    ...genController(Product, relations),
    // override functions here
}