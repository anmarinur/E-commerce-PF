const { Router } = require("express");
const {
  getOrders,
  getOrdersById,
  postOrder,
  updateOrder,
} = require("../controllers/ordersController");
const login = require("../middlewares/login.js");
const admin = require("../middlewares/admin.js");

const orderRouter = Router();

orderRouter.get("/", getOrders);

orderRouter.get("/:id", getOrdersById);

orderRouter.post("/", postOrder);

orderRouter.put("/:id", login, admin, updateOrder);

module.exports = orderRouter;
