const { Router } = require('express');
const login = require('../middlewares/login.js');
const admin = require('../middlewares/admin.js');
const { getStatsCategories, getFiveProductsLowStock } = require('../controllers/statsController.js');

const statsRouter = Router();

statsRouter.get('/categories', login, admin, getStatsCategories);

statsRouter.get('/stock', getFiveProductsLowStock);

module.exports = statsRouter;