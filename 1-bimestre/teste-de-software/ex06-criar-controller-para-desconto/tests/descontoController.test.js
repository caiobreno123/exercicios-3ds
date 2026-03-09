
const { descontoController } = require("../src/controllers/descontoController");

test("controller deve retornar valorFinal com desconto", () => {
  const req = {
    body: { valor: 200 }
  };

  const res = {
    json: jest.fn()
  };

  descontoController(req, res);

  expect(res.json).toHaveBeenCalledWith({
    valorFinal: 180
  });
});
