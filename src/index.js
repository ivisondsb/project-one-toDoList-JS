const prompt = require('prompt-sync')();

function iniciarApp() {
  while (true) {
    const opcao = menuInicial();
    selecionarOpcao(opcao);
  }
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
      console.log("Testando a opção 1");
      break;
    case '2':
      console.log("Testando a opção 2");
      break;
    case '3':
      console.log("Testando a opção 3");
      break;
    case '4':
      console.log("Testando a opção 4");
      break;
    case '5':
      console.log("Testando a opção 5");
      break;
    case '6':
      console.log("Saindo...");
      process.exit(0); // Saindo do programa
    default:
      console.log("Opção inválida");
  }
}

iniciarApp();