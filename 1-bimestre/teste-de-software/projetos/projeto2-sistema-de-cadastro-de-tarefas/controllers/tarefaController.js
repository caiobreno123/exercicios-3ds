
const tarefaService = require("../services/tarefaService");

function criarTarefa(descricao) {
  return tarefaService.cadastrarTarefa(descricao);
}

function obterTotalTarefas() {
  return tarefaService.totalTarefas();
}

module.exports = {
  criarTarefa,
  obterTotalTarefas
};
