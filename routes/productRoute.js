const express = require('express');
const router = express.Router();

const { addProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productController');

router.post('/add', addProduct); // la ruta es /api/products/add
router.get('/get', getProducts); // la ruta es /api/products/get
router.delete('/delete/:id', deleteProduct); // la ruta es /api/products/delete/:id
router.put('/update/:id', updateProduct); // la ruta es /api/products/update/:id


module.exports = router;