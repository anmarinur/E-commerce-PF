const { Order, OrderDetail, Product } = require("../db");
const { Op } = require("sequelize");

const getOrders = async () => {};

const getOrdersById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    order
      ? res.status(200).json(order)
      : res.json("Order not found or ID invalid");
  } catch (error) {
    res.json(error.message);
  }
};

const postOrder = async (req, res) => {
  let order = req.body;
  let { products } = order;

  try {
    let orderDB = await Order.create(order);

    products?.map(async (e) => {
      let productDB = await Product.findByPk(e.id);
      let orderDetailDB = await OrderDetail.create({ units: e.cuantity });
      await orderDetailDB.setProduct(productDB);
      await orderDetailDB.setOrder(orderDB);
    });

    return res.status(200).json("Order created successfully");
  } catch (error) {
    res.json(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStatus = req.body;

    await Order.update(
      { ...updateStatus },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json("Order updated successfully");
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  getOrders,
  getOrdersById,
  postOrder,
  updateOrder,
};
