const { Router } = require("express");
const { getOrders, getOrdersByEmail, getOrdersById, postOrder, updateOrder } = require("../controllers/ordersController");
const login = require("../middlewares/login.js");
const admin = require("../middlewares/admin.js");

const orderRouter = Router();

orderRouter.get("/", login, admin, getOrders);

orderRouter.get("/id/:id", login, getOrdersById);

orderRouter.get("/email/:email", getOrdersByEmail);// RECORDAR COLOCAR LOGIN

orderRouter.post("/", postOrder);// RECORDAR COLOCAR LOGIN

orderRouter.put("/:id", login, admin, updateOrder);

module.exports = orderRouter;
