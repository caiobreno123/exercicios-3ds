
const tarefaDatabase = require("../database/tarefaDatabase");

function cadastrarTarefa(descricao) {
  if (!descricao) return false;

  tarefaDatabase.salvar({ descricao });
  return true;
}

function totalTarefas() {
  return tarefaDatabase.total();
}

function listarTarefas() {
  return tarefaDatabase.listar();
}

module.exports = {
  cadastrarTarefa,
  totalTarefas,
  listarTarefas
};
