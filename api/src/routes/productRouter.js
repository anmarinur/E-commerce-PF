const { Router } = require('express');
const { getProducts, getProductById, postProduct, deleteProduct, updateProduct } = require('../controllers/productsController.js');

const productRouter = Router();

productRouter.get('/', getProducts);

productRouter.get('/:id', getProductById);

productRouter.post('/', postProduct);

productRouter.delete("/:id", deleteProduct);

productRouter.put("/:id", updateProduct);


module.exports = productRouter;