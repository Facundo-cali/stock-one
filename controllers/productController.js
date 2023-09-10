const Product = require('../models/productModel.js');

//Creacion del producto
const addProduct = async (req, res) => {
    const newProduct = new Product(req.body);

    newProduct
        .save()
        .then(() => res.json('Producto creado'))
        .catch((err) => res.status(400).json('Error: ' + err));

    //faltaria realmente rutearlo con mongodb pero para checkear que funciona esta bien hago esto
}

//Obtener todos los productos
const getProducts = async (req, res) => {
    Product.find().sort({ _id: -1 })
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json('Error: ' + err));
}

module.exports = {
    addProduct,
    getProducts
}