const express = require('express');
const productRoutes = express.Router();

const { adminVerifyToken } = require('../../Helpers/adminVerifyToken');
const {
    addNewProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../../Controller/Admin/product.controller');

productRoutes.post('/add-product', addNewProduct);

productRoutes.get('/get-All-product', getAllProducts);

productRoutes.get('/get-product', getProduct);

productRoutes.put('/update-product', updateProduct);

productRoutes.delete('/delete-product', deleteProduct);

module.exports = productRoutes;