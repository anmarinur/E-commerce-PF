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
const postProduct = () => {}
const deleteProduct = () => {}
const updateProduct = () => {}

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    deleteProduct,
    updateProduct,
}