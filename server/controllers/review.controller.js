const genController = require('./gen.controller');
const {Review} = require('../models/_index');

const relations = {}

module.exports = {
    // function is not a function what the fuck
    ...genController(Review, relations),
    // override functions here
}