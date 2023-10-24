const prompt = require('prompt-sync')();

let listaDeTarefas = [];

function iniciarApp() {
  while (true) {
    const opcao = menuInicial();
    if (!selecionarOpcao(opcao)) {
      console.log("\nVolte sempre!")
      break;
    }
  }
}

function querContinuar() {
  const resposta = prompt('Deseja continuar? Digite "S" ou "N": ');
  return resposta.toLowerCase() === 's';
}

function menuInicial() {
  console.log("\n======= Menu =======");
  console.log("1. Adicionar uma tarefa");
  console.log("2. Editar uma tarefa");
  console.log("3. Remover uma tarefa");
  console.log("4. Listar todas as tarefas");
  console.log("5. Obter uma tarefa por ID");
  console.log("6. Sair");
  const opcao = prompt('Escolha uma das opções acima: ');

  return opcao;
}

function selecionarOpcao(op) {
  switch (op) {
    case '1':
      adicionarTarefa();
      break;
    case '2':
      console.log("\nTestando a opção 2");
      break;
    case '3':
      console.log("\nTestando a opção 3");
      break;
    case '4':
      console.log("\nTestando a opção 4");
      break;
    case '5':
      console.log("\nTestando a opção 5");
      break;
    case '6':
      console.log("\nSaindo do menu..");
      break;
    default:
      console.log("\nOpção inválida");
  }

  if (querContinuar()) {
    return true;
  } else {
    return false;
  }
}

function adicionarTarefa() {

}

iniciarApp();