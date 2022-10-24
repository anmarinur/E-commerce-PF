const { Router } = require("express");
const { getOrders, getOrdersByEmail, getOrdersById, postOrder, updateOrder, updateStatus } = require("../controllers/ordersController");
const login = require("../middlewares/login.js");
const admin = require("../middlewares/admin.js");

const orderRouter = Router();

orderRouter.get("/", getOrders);//RECORDAR AGREGAR LOGIN Y ADMIN //

orderRouter.get("/id/:id", login, getOrdersById);

orderRouter.get("/email/:email", login, getOrdersByEmail);

orderRouter.post("/", postOrder);//RECORDAR AGREGAR LOGIN Y ADMIN //

orderRouter.put("/:id", updateOrder);//RECORDAR AGREGAR LOGIN Y ADMIN //

orderRouter.put('/status/:status', updateStatus);

module.exports = orderRouter;
