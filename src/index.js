const prompt = require("prompt-sync")();

let listaDeTarefas = [];

function iniciarApp() {
  while (true) {
    console.clear();
    const opcao = menuInicial();
    if (!selecionarOpcao(opcao)) {
      console.clear();
      console.log("\nPrograma encerrado!\n");
      break;
    }
  }
}

function menuInicial() {
  console.log("\n======= Menu =======");
  console.log("1. Adicionar uma tarefa");
  console.log("2. Editar uma tarefa");
  console.log("3. Remover uma tarefa");
  console.log("4. Listar todas as tarefas");
  console.log("5. Obter uma tarefa por ID");
  console.log("6. Sair\n");

  const opcao = prompt("Escolha uma das opções acima: ");

  return opcao;
}

function selecionarOpcao(op) {
  switch (op) {
    case "1":
      console.log("\nTestando a opção 1");
      break;
    case "2":
      console.log("\nTestando a opção 2");
      break;
    case "3":
      removerTarefa();
      break;
    case "4":
      console.log("\nTestando a opção 4");
      break;
    case "5":
      console.log("\nTestando a opção 5");
      break;
    case "6":
      return false;
    default:
      console.clear();
      console.log("\nOpção inválida.\n");
  }

  if (querContinuar()) {
    return true;
  } else {
    return false;
  }
}

function querContinuar() {
  while (true) {
    const resposta = prompt(
      'Deseja continuar? Digite "S" para continuar ou "N" para parar: '
    );
    if (resposta.toLowerCase().trim() === "s") {
      return true;
    } else if (resposta.toLowerCase().trim() === "n") {
      return false;
    } else {
      console.clear();
      console.log(
        "Ação incorreta. Por favor, digite 'S' para continuar ou 'N' para parar.\n"
      );
    }
  }
}

function removerTarefa() {
  console.clear();

  const tarefas = listaDeTarefas.length;

  if (!tarefas) {
    const aviso = console.log("\nNão existe nenhuma tarefa cadastrada.\n");
    return aviso;
  }

  console.log("\n====== Remover Tarefas ======");
  console.log("\nQual tarefa você quer deletar?\n");
  console.log(listaDeTarefas, "\n");

  let pegarId = prompt(
    "Insira a posição da tarefa a qual deseja remover: "
  ).trim();

  const id = Number(pegarId);

  if (id === 1) {
    console.clear();
    listaDeTarefas.shift();
    console.log("\nTarefa Removida com sucesso!\n");
  }
  if (id > 1 && id <= tarefas) {
    console.clear();
    listaDeTarefas.splice(id - 1, 1);
    console.log("\nTarefa Removida com sucesso!\n");
  }
  if (id > tarefas || id <= 0) {
    console.clear();
    console.log("\nErro: Posição Inválida.\n");
  }
}

iniciarApp();
