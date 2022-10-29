const { Product, Review } = require("../db.js");

const getComments = async (req, res) => {
 const {id} = req.params;
  try {
   const productDB = await Product.findAll({where: { id }, attributes: ["rating"]});
   const ratingDB = await Review.findAll({where: { ProductId: id}, attributes:['rating']});
   const rating = productDB.map(e => e.rating);
   const rat = ratingDB.map(e => e.rating);
   const newRating = (rating[0] + rat[0])/2
   
   await Product.update({rating: newRating.toFixed(2)}, {where:{id}});

   const product = await Product.findAll({where:{id}, attributes:['rating'], include: {model: Review, attributes: {exclude: ['email']} }});

   res.status(200).json(product);
   
  } catch (error) {
    res.json({ error: error.message });
  }
};

const postComments = async (req, res) => {
  const { email, comments } = req.body;
  try {
   comments.map(async (e) => await Review.create({
    email, 
    comment: e.comment,
    rating: e.rating,
    ProductId: e.id
   }));
   res.status(200).json('Review added successfully')
    
  } catch (error) {
    res.json(error.message);
  }
};

const updateComments = async (req, res) => {};

const deleteComments = async (req, res) => {};

module.exports = {
  getComments,
  postComments,
  updateComments,
  deleteComments,
};
