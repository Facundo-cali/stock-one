const express = require('express');
const router = express.Router();

const { addProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productController');

router.post('/add', addProduct);
router.get('/get', getProducts);
router.delete('/delete/:id', deleteProduct);
router.put('/update/:id', updateProduct);


module.exports = router;