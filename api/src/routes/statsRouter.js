const { Router } = require('express');
const login = require('../middlewares/login.js');
const admin = require('../middlewares/admin.js');
const { getStatsCategories } = require('../controllers/statsController.js');

const statsRouter = Router();

statsRouter.get('/categories', login, admin, getStatsCategories);

module.exports = statsRouter;