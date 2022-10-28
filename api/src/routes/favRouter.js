const { Router } = require("express");
const {
  getFavorites,
  postFavorites,
} = require("../controllers/favsController.js");
const login = require("../middlewares/login.js");
const admin = require("../middlewares/admin.js");

const favRouter = Router();

favRouter.get("/", /* login, */ getFavorites);
favRouter.post("/", /* login, */ postFavorites);

module.exports = favRouter;
