const genController = require('./gen.controller');
const {User} = require('../models/_index');

const relations = {}

module.exports = {
    // function is not a function what the fuck
    ...genController(User, relations),
    // override functions here
}