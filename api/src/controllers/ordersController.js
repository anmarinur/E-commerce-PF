const { Order, OrderDetail, Product } = require('../db');
const { Op } = require("sequelize");

const getOrders = async () => {};

const getOrdersById = async () => {};

const postOrder = async (req, res) => {
  let order = req.body;
  let {products} = order;

  try {

    let orderDB = await Order.create(order);

    products?.map(async(e) => {
      let productDB = await Product.findByPk(e.id)
      let orderDetailDB = await OrderDetail.create({units: e.cuantity})
      await orderDetailDB.setProduct(productDB);
      await orderDetailDB.setOrder(orderDB);
    });

    return res.status(200).json('Order created successfully')

 } catch (error) {
    res.json(error.message)
 }
};

const updateOrder = async () => {};

module.exports = {
  getOrders,
  getOrdersById,
  postOrder,
  updateOrder,
};
