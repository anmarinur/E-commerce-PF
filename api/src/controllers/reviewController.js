const { Product, Review } = require("../db.js");

var newComment = false;

const getComments = async (req, res) => {
 const {id} = req.params;
 const {order} = req.query;

 let orderBy = 'DESC';

  try {
   if(newComment){
   newComment = false;
   const ratingDB = await Review.findAndCountAll({
     where: { ProductId: id },
     attributes: ["rating"]
   });

   let sum = 0;   
   ratingDB.rows.map(e => sum = sum + e.rating )
   
   const newRating = sum /ratingDB.count;
   
   await Product.update({rating: newRating.toFixed(2)}, {where:{id}});
   }  

   if(order) orderBy = order;
   const product = await Product.findAll({
     where: { id },
     attributes: ["rating"],
     include: {
       model: Review,
       attributes: { exclude: ["email"] },
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


const deleteComments = async (req, res) => {
 const { id } = req.params; //id del review
try {
 
 const review = await Review.findByPk(id);
 await Review.destroy({ where: { id } });
 
 const ratingDB = await Review.findAndCountAll({
   where: { ProductId: review.ProductId },
   attributes: ["rating"],
 });

 let newRating = 0;

 if(ratingDB.count > 0){
   let sum = 0;
   ratingDB.rows.map((e) => (sum = sum + e.rating));
   newRating = sum / ratingDB.count;
  }

 await Product.update({rating: newRating.toFixed(2)}, {where:{id: review.ProductId}});     

 res.status(200).json("Comment deleted successfully");
} catch (error) {
 res.json(error.message);
}
};

module.exports = {
  getComments,
  postComments,
  deleteComments,
};
