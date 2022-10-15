const { Product } = require('../db.js');

const getProducts = async (req, res) => {
    const pageNumber = Number.parseInt(req.query.page);
    const sizeNumber = Number.parseInt(req.query.size);

    let page = 0;
    let size = 12;

    if(!Number.isNaN(pageNumber) && pageNumber > 0) page = pageNumber;
    if(!Number.isNaN(sizeNumber) && sizeNumber > 0 && sizeNumber < 12) size = sizeNumber;

    try {
        const products = await Product.findAndCountAll({
            limit: size,
            offset: page * size
        });
        res.status(200).json({
            totalPages: Math.ceil(products.count / size),
            products: products.rows
        });

    } catch (error) {
       res.status(404).json({error: error.message}); 
    }
};

const getProductById = () => {}
const postProduct = () => {}
const deleteProduct = () => {}
const updateProduct = () => {}

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    deleteProduct,
    updateProduct,
}