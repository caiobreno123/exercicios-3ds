
const tarefaService = require("../services/tarefaService");
const tarefaDatabase = require("../database/tarefaDatabase");

beforeEach(() => {
  tarefaDatabase.limpar();
});

describe("Sistema de Cadastro de Tarefas", () => {

  test("Banco deve iniciar vazio", () => {
    expect(tarefaService.totalTarefas()).toBe(0);
  });

  test("Cadastro de tarefa com sucesso", () => {
    const resultado = tarefaService.cadastrarTarefa("Estudar Jest");
    expect(resultado).toBe(true);
  });

  test("Não permite cadastrar tarefa sem descrição", () => {
    const resultado = tarefaService.cadastrarTarefa();
    expect(resultado).toBe(false);
  });

  test("Total de tarefas deve aumentar após cadastro", () => {
    tarefaService.cadastrarTarefa("Tarefa 1");
    expect(tarefaService.totalTarefas()).toBe(1);
  });

  test("Lista deve conter a tarefa cadastrada (desafio extra)", () => {
    tarefaService.cadastrarTarefa("Nova tarefa");
    const lista = tarefaService.listarTarefas();
    expect(lista[0].descricao).toBe("Nova tarefa");
  });

});
