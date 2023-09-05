const express = require('express');
const router = express.Router();

const { addProduct } = require('../controllers/productController.js');

router.post('/add', addProduct);

module.exports = router;