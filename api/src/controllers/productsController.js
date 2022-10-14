const { Products } = require('../db.js');

const getProducts = (req, res) => {
    res.send("Hello World");
};
const getProductById = () => {};
const postProduct = () => {};
const deleteProduct = () => {};
const updateProduct = () => {};

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    deleteProduct,
    updateProduct,
}