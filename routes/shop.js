const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsControlle.getProduct);

module.exports = router;
