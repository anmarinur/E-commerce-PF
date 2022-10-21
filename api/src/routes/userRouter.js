const { Router } = require('express');
const { getUser } = require('../controllers/usersController.js');
const login = require('../middlewares/login.js');
const admin = require('../middlewares/admin.js');

const userRouter = Router();

userRouter.get('/', login, admin, getUser);

module.exports = userRouter;