const Product = require('../models/productModel.js');

//Creacion del producto
const addProduct = async (req, res) => {
    const newProduct = new Product(req.body);

    newProduct
        .save()
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json('Error: ' + err));

    //faltaria realmente rutearlo con mongodb pero para checkear que funciona esta bien hago esto
}

//Obtener todos los productos
const getProducts = async (req, res) => {
    Product.find({ deleted: false }).sort({ _id: -1 })
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json('Error: ' + err));
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json('Producto no encontrado');
        }

        // Marcar el producto como eliminado en lugar de eliminarlo
        product.deleted = true;
        await product.save();

        res.json('Producto marcado como eliminado');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
}


module.exports = {
    addProduct,
    getProducts,
    deleteProduct
}