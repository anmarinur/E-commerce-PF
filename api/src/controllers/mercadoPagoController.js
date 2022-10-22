const mercadopago = require("mercadopago"); 

const postMercadoPago = (req, res) => {

  let preference = {
    items: req.body.map((product) => {
      return({
        title: product.name,
        unit_price: product.price,
        quantity: 1,
        picture_url: product.image
      })
    })
  };

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