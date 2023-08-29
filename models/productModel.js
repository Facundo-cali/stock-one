const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        unique: true,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
}, {
    timestamps: true, // Agregar timestamps automáticos
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

