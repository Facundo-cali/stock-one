const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
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
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true, // Agregar timestamps automáticos
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

