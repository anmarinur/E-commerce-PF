const { Router } = require("express");
const mercadopago = require("mercadopago");
const { postMercadoPago } = require("../controllers/mercadoPagoController");

const mercadoPagoRouter = Router();

mercadopago.configure({
	access_token: "TEST-8973602885858519-102018-67360997190390b485cb5f6cb0d6af96-148609965"
});

mercadoPagoRouter.post("/", postMercadoPago);

module.exports = mercadoPagoRouter;
