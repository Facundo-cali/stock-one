const express = require('express');
const router = express.Router();

const { addProduct, getProducts, deleteProduct } = require('../controllers/productController');

router.post('/add', addProduct);
router.get('/get', getProducts);
router.delete('/delete/:id', deleteProduct);


module.exports = router;