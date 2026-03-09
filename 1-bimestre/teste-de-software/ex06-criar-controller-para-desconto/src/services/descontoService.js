
function aplicarDesconto(valor) {
  if (valor > 100) {
    return valor * 0.9; // 10% de desconto
  }
  return valor;
}

module.exports = { aplicarDesconto };
