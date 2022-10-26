const { Order, Product, OrderDetail } = require("../db");
const { Op } = require("sequelize");
const emailNotifications = require("../utils/emailNotifications.js");
const message = require("../utils/emailMessages");

const getOrders = async (req, res) => {
    const pageNumber = Number.parseInt(req.query.page);
    const sizeNumber = Number.parseInt(req.query.size);
    let orderBy      = req.query.orderBy;
    let orderAs      = req.query.orderAs;
    const { filter } = req.body;

    let page  = 0;
    let size  = 12;
    if(!Number.isNaN(pageNumber) && pageNumber > 0) page = pageNumber;
    if(!Number.isNaN(sizeNumber) && sizeNumber > 0 && sizeNumber < 12) size = sizeNumber;
    if(!orderBy) orderBy="createdAt";
    if(!orderAs) orderAs="DESC";

    try{
        const orders = await Order.findAndCountAll({
            where: filter,
            order: [[orderBy, orderAs]],
            limit: size,
            offset: page * size
        });
        console.log(orders)
        return res.status(200).json({
            totalPages: Math.ceil(orders.count / size), 
            orders: orders.rows
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
      },
      include: Product,
    });

    order.length !== 0
      ? res.status(200).send(order)
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
      await orderDB.addProduct(productDB, { through : { units: e.quantity}});
    });


    emailNotifications(orderDB.user_email,"Information about your purchase", message.purchase);

    return res.status(200).json(orderDB.id);
    
  } catch (error) {
    res.json(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { updateStatus } = req.body;

    await Order.update(
      { status : updateStatus },
      {
        where: {
          id,
        },
      }
    );

    let orderDB = await Order.findByPk(id);

    let msg =
      orderDB.status === "in process"
        ? message.statusInProcess
        : orderDB.status === "delivered"
        ? message.statusDelivered
        : orderDB.status === "received"
        ? message.statusReceived
        : orderDB.status === "pending"
        ? message.statusPending
        : message.statusCancelled 

    emailNotifications(orderDB.user_email, 'Information about your purchase', msg);
    
    res.status(200).json("Order updated successfully");
  } catch (error) {
    res.json(error.message);
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.query;
    let {status} = req.params;
    
    if(status==="rejected") status="cancelled"
    if(status==="approved") status="in process"
    if(status==="in_process") status="pending"
    if(status==="pending") status="pending"

    await Order.update(
      { status: status },
      {
        where: {
          id: Number(id),
        },
      }
    );

    let orderDB = await Order.findByPk(id);

    emailNotifications(orderDB.user_email, 'Information about your purchase', message.statusCancelled); 

    res.status(200).json("Status updated successfully");
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  getOrders,
  getOrdersByEmail,
  postOrder,
  updateOrder,
  getOrdersById,
  updateStatus
};
