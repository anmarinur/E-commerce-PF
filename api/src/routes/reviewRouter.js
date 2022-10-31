const { Router } = require("express");
const login = require("../middlewares/login.js");
const admin = require("../middlewares/admin.js");
const { getComments,
  postComments,
  deleteComments,
} = require("../controllers/reviewController");


const reviewRouter = Router();

reviewRouter.get("/:id", getComments);

reviewRouter.post("/", login, postComments);

reviewRouter.delete("/:id", login, admin, deleteComments);

module.exports = reviewRouter;
