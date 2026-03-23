class BancoProdutos {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  listarProdutos() {
    return this.produtos;
  }
}

module.exports = BancoProdutos;
