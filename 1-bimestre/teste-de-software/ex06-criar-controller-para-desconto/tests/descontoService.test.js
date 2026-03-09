
const { aplicarDesconto } = require("../src/services/descontoService");

test("deve aplicar 10% de desconto quando valor > 100", () => {
  const resultado = aplicarDesconto(200);
  expect(resultado).toBe(180);
});

test("não deve aplicar desconto quando valor <= 100", () => {
  const resultado = aplicarDesconto(80);
  expect(resultado).toBe(80);
});
