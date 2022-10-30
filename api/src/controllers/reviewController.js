const { Product, Review } = require("../db.js");

var newComment = false;

const getComments = async (req, res) => {
 const {id} = req.params;
 const {order} = req.query;

 let orderBy = 'DESC';

  try {
   if(newComment){
   newComment = false;
   const productDB = await Product.findAll({where: { id }, attributes: ["rating"]});
   const ratingDB = await Review.findAll({
     where: { ProductId: id },
     attributes: ["rating"],
     order: [["createdAt", "DESC"]],
   });
   const rating = productDB.map(e => e.rating);
   const rat = ratingDB.map(e => e.rating);
   const newRating = (rating[0] + rat[0])/2
   
   await Product.update({rating: newRating.toFixed(2)}, {where:{id}});
   }  

   if(order) orderBy = order;
   const product = await Product.findAll({
     where: { id },
     attributes: ["rating"],
     include: {
       model: Review,
       attributes: { exclude: ["email", "id"] },
     },
     order: [[Review, "createdAt", orderBy]]
   });

   product.length !== 0 ? res.status(200).json(product) : res.status(200).json('Product not found');
   
  } catch (error) {
    res.json({ error: error.message });
  }
};

const postComments = async (req, res) => {
  const { email, comment, rating, idProduct, idOrder } = req.body;
  try {

   await Review.create({
    email: email, 
    comment: comment,
    rating: rating,
    orderId: idOrder,
    ProductId: idProduct
   });

   newComment = true;
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
