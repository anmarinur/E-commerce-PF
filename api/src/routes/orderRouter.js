const { Router } = require("express");
const { getOrders, getOrdersById, postOrder, updateOrder } = require('../controllers/ordersController');

const orderRouter = Router();

orderRouter.get("/", getOrders);

orderRouter.get("/:id", getOrdersById);

orderRouter.post("/", postOrder);

orderRouter.put("/:id", updateOrder);

module.exports = orderRouter;