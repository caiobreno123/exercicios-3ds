
const { aplicarDesconto } = require("../services/descontoService");

function descontoController(req, res) {
  const { valor } = req.body;

  const resultado = aplicarDesconto(valor);

  return res.json({
    valorFinal: resultado
  });
}

module.exports = { descontoController };
