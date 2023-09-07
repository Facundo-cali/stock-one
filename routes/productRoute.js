const express = require('express');
const router = express.Router();

const { addProduct } = require('../controllers/productController.js');
const { getProducts } = require('../controllers/productController.js');

router.post('/add', addProduct);

router.get('/get', getProducts);


module.exports = router;