
class TarefaDatabase {
  constructor() {
    this.tarefas = [];
  }

  salvar(tarefa) {
    this.tarefas.push(tarefa);
  }

  listar() {
    return this.tarefas;
  }

  total() {
    return this.tarefas.length;
  }

  limpar() {
    this.tarefas = [];
  }
}

module.exports = new TarefaDatabase();
