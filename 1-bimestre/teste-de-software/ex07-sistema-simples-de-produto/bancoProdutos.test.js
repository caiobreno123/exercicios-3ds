const BancoProdutos = require('./bancoProdutos');

describe("Banco de Produtos", () => {

  test("Banco começa vazio", () => {
    const banco = new BancoProdutos();
    expect(banco.listarProdutos()).toEqual([]);
  });

  test("Produto é adicionado", () => {
    const banco = new BancoProdutos();

    const produto = {
      id: 1,
      nome: "Caneta",
      quantidade: 100
    };

    banco.adicionarProduto(produto);

    expect(banco.listarProdutos().length).toBe(1);
    expect(banco.listarProdutos()[0]).toEqual(produto);
  });

});
