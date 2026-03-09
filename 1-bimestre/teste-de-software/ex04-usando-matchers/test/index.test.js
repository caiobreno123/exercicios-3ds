describe('Testes usando matchers do Jest', () => {

  test('5 deve ser maior que 3', () => {
    expect(5).toBeGreaterThan(3);
  });

  test('texto deve conter a palavra Software', () => {
    expect("Teste de Software").toContain("Software");
  });

  test('objeto deve ser igual ao esperado', () => {
    const resultado = { aprovado: true };
    expect(resultado).toEqual({ aprovado: true });
  });

});
