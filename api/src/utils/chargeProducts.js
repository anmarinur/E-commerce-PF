const data = require('./../../productsInfo.json');
const { Product } = require('../db.js');


const chargeProducts = () =>{
//const products = JSON.parse(data);
    try {
        let dataBD = data.map((e) => Product.create(e));
        PromiseAll(dataBD).then(()=> console.log('Se creó'));
    } catch (error) {
        return error.message;
    }
}

module.exports= chargeProducts;