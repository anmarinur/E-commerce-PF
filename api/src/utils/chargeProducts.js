const data = require('./../../productsInfo.json');
const { Product, Category } = require('../db.js');


const chargeProducts = () =>{
    try {
        const categories = ["laptops", "smartphones", "tablets", "smartwatches", "speakers", "tv"];
        const CategoryDB = categories.map(name=>Category.findOrCreate({where:{category: name}}));
        Promise.all(CategoryDB).then(()=>console.log('Categories successfully charged'));
        const ProductDB = data.map((e) => Product.findOrCreate({where:{
            name: e.name,
            image: e.image,
            description: e.description,
            price: e.price,
            CategoryId: e.CategoryId,
            rating: e.rating,
            stock: e.stock,
            brand: e.brand,
        }}));
        Promise.all(ProductDB).then(()=>console.log('Product successfully charged'));
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports= chargeProducts;