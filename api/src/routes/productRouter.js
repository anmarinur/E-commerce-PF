const { Router } = require('express');
const { getProducts, getProductById, postProduct, deleteProduct, updateProduct, getBrands } = require('../controllers/productsController.js');
const login = require("../middlewares/login.js");
const admin = require("../middlewares/admin.js");

const productRouter = Router();

productRouter.get('/', getProducts);

productRouter.get('/brand', getBrands);

productRouter.get('/:id', getProductById);

productRouter.post('/', login, admin, postProduct);

productRouter.delete("/:id", login, admin, deleteProduct);

productRouter.put("/:id", login, admin, updateProduct);


module.exports = productRouter;