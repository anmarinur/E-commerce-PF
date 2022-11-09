const data = require('./../../productsInfo.json');
const { Product, Category } = require('../db.js');


const chargeProducts = () =>{
    try {
        const categories = [{id: 1, category: "laptops"}, {id:2, category: "smartphones"},{id:3, category:"tablets"},{id:4, category:"smartwatches"}, {id:5, category: "speakers"}, {id:6, category:"tv"}];
        const CategoryDB = categories.map(c=>Category.create(c));
        Promise.all(CategoryDB).then(()=>console.log('Categories successfully charged'));
        const ProductDB= data.map((e) => Product.create({
            name: e.name,
            image: e.image,
            description: e.description,
            price: e.price,
            CategoryId: e.CategoryId,
            rating: e.rating,
            stock: e.stock,
            brand: e.brand,
        }));
        Promise.all(ProductDB).then(()=>console.log('Product successfully charged'));
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports= chargeProducts;