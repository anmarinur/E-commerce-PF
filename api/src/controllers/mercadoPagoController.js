const mercadopago = require("mercadopago"); 
const { Product } = require("../db");

const postMercadoPago = (req, res) => {

  let preference = {
    "items": req.body.map((product) => {
      return({
        title: product.name,
        unit_price: Number(product.price),
        quantity: Number(product.qty),
        picture_url: product.image
      })
    }),
    "back_urls": {
      "success": "http://localhost:3000/profile",
      "failure": "http://localhost:3000/order",
      "pending": "http://localhost:3000/order"
    }
  };

  req.body.map(async p => {
   await Product.increment({stock: -p.qty}, {where:{ name: p.name }});
   })  
   

  mercadopago.preferences
  .create(preference)
    .then(function (response) {
      res.send(response.body.init_point)
      //res.redirect({response.body.id})
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    })
    .catch(function (error) {
      console.log(error);
    });

};

module.exports = {
    postMercadoPago
}