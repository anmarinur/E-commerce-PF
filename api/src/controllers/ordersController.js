const { Order, Product } = require("../db");
const { Op } = require("sequelize");

const getOrders = async (req, res) => {
    const pageNumber = Number.parseInt(req.query.page);
    const sizeNumber = Number.parseInt(req.query.size);
    let orderBy      = req.query.orderBy;
    let orderAs      = req.query.orderAs;
    const filtro     = req.body;

    let page  = 0;
    let size  = 12;
    if(!Number.isNaN(pageNumber) && pageNumber > 0) page = pageNumber;
    if(!Number.isNaN(sizeNumber) && sizeNumber > 0 && sizeNumber < 12) size = sizeNumber;
    if(!orderBy) orderBy="updatedAt";
    if(!orderAs) orderAs="DESC";

    try{
        const orders = await Order.findAndCountAll({
            where: filtro,
            order: [[orderBy, orderAs]],
            limit: size,
            offset: page * size
        });
        console.log(orders)
        return res.status(200).json({
            totalPages: Math.ceil(orders.count / size), 
            products: orders.rows
        })
    }catch{
        res.status(404).json({ error: "Product not found" });
    }
};

const getOrdersById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({
      where: {id},
      include: Product
    });

    order
      ? res.status(200).json(order)
      : res.json("Order not found or ID invalid");
  } catch (error) {
    res.json(error.message);
  }
};

const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const order = await Order.findAll({
      where: {
        user_email: email
      }
    });

    order
      ? res.status(200).json(order)
      : res.json("Order not found or email invalid");
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
      await orderDB.addProduct(productDB, { through : { units: e.cuantity}});
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
  getOrdersByEmail,
  postOrder,
  updateOrder,
  getOrdersById
};