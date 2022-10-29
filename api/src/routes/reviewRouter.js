const { Router } = require("express");
const login = require("../middlewares/login.js");
const admin = require("../middlewares/admin.js");
const { getComments,
  postComments,
  deleteComments,
  updateComments,
} = require("../controllers/reviewController");


const reviewRouter = Router();

reviewRouter.get("/:id", getComments);

reviewRouter.post("/", login, postComments);

reviewRouter.put('/:id', login, updateComments);

reviewRouter.delete("/:id", login, admin, deleteComments);

module.exports = reviewRouter;
