const { Router } = require('express');
const { getFavorits, postFavorits } = require('../controllers/favsController.js');
const login = require("../middlewares/login.js");
const admin = require("../middlewares/admin.js");

const favRouter = Router();

favRouter.get('/getFavorits',login, admin, getFavorits);
favRouter.post('/postFavorits',login, admin, postFavorits);


module.exports = favRouter;