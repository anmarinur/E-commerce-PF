const data = require('./../../productsInfo.json');
const { Product, Category } = require('../db.js');


const chargeProducts = () =>{
    try {
        const categories = ["laptops", "smartphones", "tablets", "smartwatches", "speakers", "tv"];
        const CategoryDB = categories.map(name=>Category.create({category: name}));
        Promise.all(CategoryDB).then(()=>console.log('Categories successfully charged'));
        let dataBD = data.map((e) => Product.create(e));
        Promise.all(dataBD).then(()=> console.log('Products successfully charged'));
    } catch (error) {
        console.log(error.message);
    }
}

module.exports= chargeProducts;