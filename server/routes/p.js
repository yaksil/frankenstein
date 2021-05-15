/**
 * api routes for Product model
 * @type {*}
 */
const express = require('express')
const router = require('express-promise-router')(); //bloody hell i can't believe it
const {product} = require('../controllers/_index.js');

// router.route("/").get(product.getAll);
router.route("/:id").get(product.getById);
router.route("/").post(product.create);
router.route("/:id").put(product.updateById);
router.route("/:id").delete(product.delete);

// additional functions from the happy house
router.route("/").get(product.getByArtisan);

module.exports = router;
