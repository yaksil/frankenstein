const artisan = require('./artisan.controller');
const category = require('./category.controller');
const order = require('./order.controller');
const product = require('./product.controller');
const review = require('./review.controller');
const user = require('./user.controller');
const auth = require('./auth.controller');

module.exports = {
    auth,
    artisan,
    category,
    order,
    product,
    review,
    user,
}