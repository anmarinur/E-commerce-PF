const { Router } = require("express");
const { getOrders, getOrdersByEmail, getOrdersById, postOrder, updateOrder, updateStatus } = require("../controllers/ordersController");
const login = require("../middlewares/login.js");
const admin = require("../middlewares/admin.js");

const orderRouter = Router();

orderRouter.get("/", login, admin, getOrders);

orderRouter.get("/id/:id", login, getOrdersById);

orderRouter.get("/email/:email", login, getOrdersByEmail);

orderRouter.post("/", postOrder);

orderRouter.put("/:id", login, admin, updateOrder);

orderRouter.put('/status/:status', updateStatus);

module.exports = orderRouter;
