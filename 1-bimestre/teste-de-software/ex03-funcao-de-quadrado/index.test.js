const { calcularQuadrado } = require('./index');

describe('Função calcularQuadrado', () => {

  test('calcularQuadrado(5) deve retornar 25', () => {
    const resultado = calcularQuadrado(5);
    expect(resultado).toBe(25);
  });

});
