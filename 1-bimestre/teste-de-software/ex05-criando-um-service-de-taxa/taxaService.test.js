const { calcularTaxa } = require('./taxaService');

describe('TaxaService', () => {

  let valor;

  beforeEach(() => {
    valor = 0;
  });

  test('deve cobrar 5% quando valor for maior que 500', () => {
    valor = 600;

    const resultado = calcularTaxa(valor);

    expect(resultado).toBe(30);
  });

  test('não deve cobrar taxa quando valor for menor ou igual a 500', () => {
    valor = 400;

    const resultado = calcularTaxa(valor);

    expect(resultado).toBe(0);
  });

});
