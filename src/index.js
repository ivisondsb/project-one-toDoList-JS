const prompt = require('prompt-sync')();

let listaDeTarefas = [];

function iniciarApp() {
  while (true) {
    console.clear();
    const opcao = menuInicial();
    if (!selecionarOpcao(opcao)) {
      console.clear();
      console.log("\nPrograma encerrado!\n")
      break;
    }
  }
}

function querContinuar() {
  while (true) {
    const resposta = prompt('Deseja continuar? Digite "S" para continuar ou "N" para parar: ');
    if (resposta.toLowerCase().trim() === 's') {
      return true;
    } else if (resposta.toLowerCase().trim() === 'n') {
      return false;
    } else {
      console.clear();
      console.log("Ação incorreta. Por favor, digite 'S' para continuar ou 'N' para parar.\n");
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
  const opcao = prompt('Escolha uma das opções acima: ');

  return opcao;
}

function obterTarefaPorId() {
  console.clear();
  console.log("======= Obter Tarefa por ID =======");

  if (listaDeTarefas.length === 0) {
    console.log("A lista de tarefas está vazia.");
  } else {
    listarTarefas();
    const idTarefa = parseInt(prompt('Digite o ID da tarefa que deseja obter: '));
    const tarefaEncontrada = listaDeTarefas.find((tarefa) => tarefa.id === idTarefa);

    if (tarefaEncontrada) {
      console.log('Tarefa encontrada:');
      console.log(`ID: ${tarefaEncontrada.id}`);
      console.log(`Descrição: ${tarefaEncontrada.descricao}`);
    } else {
      console.log('Tarefa não encontrada.');
    }
  }
}


function selecionarOpcao(op) {
  switch (op) {
    case '1':
      console.log("\nTestando a opção 1");
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



iniciarApp();