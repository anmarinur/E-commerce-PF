const { Product } = require('../db.js');

const getProducts = async (req, res) => {
    try {
        const newProduct = await Product.create({
            name: "ThinkPad E14",
            image: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-e14-gen-2-hero.png?context=bWFzdGVyfHJvb3R8MjY4OTA2fGltYWdlL3BuZ3xoYTAvaGIyLzE0MTA2OTIyMzE5OTAyLnBuZ3xkMTM5OTVhY2M3ODRhNGZlOGZiN2M0N2RlNjJiYTA4Zjg2ZjUwM2RhY2UyM2VkZWYwMzY4OTA3ZmQ3ZTlkYjVh",
            description: "Procesamiento hasta Intel® Core™ i7 de 11va generación",
            price: 289999.00,
            category: "notebook"
        });
        res.json(newProduct);
    } catch (error) {
       res.json({error: error.message}); 
    }
};
const getProductById = () => {}

const postProduct = async ( req, res ) => {
 try {
  const { name, image, description, price, category, stock, brand } = req.body; 

  if( !name || !image || !description || !price || !category || !stock || !brand) throw(Error('Invalid inputs'));

  let productData = await Product.findAll({
   where:{
    name: name,
    brand: brand,
    stock: stock
   }
  });

  if(productData.length > 0) throw(Error('Product already in database'));

  let product = await Product.create({ name, image, description, price, category, stock, brand });

  res.status(200).json('Product created successfully');

 } catch (error) {
  res.status(404).json({error: error.message});
 }
}

const deleteProduct = () => {}
const updateProduct = () => {}

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    deleteProduct,
    updateProduct,
}