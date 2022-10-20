const { Sequelize } = require('sequelize');
const modelProduct = require('./models/Product.js')
const modelUser = require('./models/User.js')
const modelOrder = require('./models/Order.js')
const modelOrderDetail = require('./models/OrderDetail')
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

// postgresql://${{ DB_USER }}:${{ DB_PASSWORD }}@${{ DB_HOST }}:${{ DB_PORT }}/${{ DB_NAME }}
const sequelize = new Sequelize(`postgres://${ DB_USER }:${ DB_PASSWORD }@${ DB_HOST }:${ DB_PORT }/${ DB_NAME }`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

modelProduct(sequelize);
modelUser(sequelize);
modelOrder(sequelize);
modelOrderDetail(sequelize);

const { Product, User, Order, OrderDetail } = sequelize.models;

// relaciones pendientes y mas modelos

module.exports = {
  Product,
  User,
  Order,
  OrderDetail,
  db: sequelize,
};