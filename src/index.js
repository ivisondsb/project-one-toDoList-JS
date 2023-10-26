const prompt = require('prompt-sync')();

let listaDeTarefas = [];

function iniciarApp() {
  while (true) {
    console.clear();
    const opcao = menuInicial();
    if (!selecionarOpcao(opcao)) {
      console.clear();
      if(listaDeTarefas){ //só executa se houver coisa na lista.
        console.log("\nSua lista ficou:\n")
        for (let i = 0; i < listaDeTarefas.length; i++){
          console.log(`${i+1}: ${listaDeTarefas[i]}`);
          }
        }
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

function selecionarOpcao(op) {
  switch (op) {
    case '1':
      adicionarTarefa()
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

function adicionarTarefa() {
  console.clear();
  console.log("\n======= Adicionar uma tarefa =======\n");
  let novaTarefa = prompt('Digite a nova tarefa: ').trim();

  while (!novaTarefa) {
    console.log("\nPor favor, insira uma tarefa válida.");
    novaTarefa = prompt('Digite a nova tarefa: ').trim();
  }

  const tarefaJaExiste = listaDeTarefas.map(tarefa => tarefa.toLowerCase()).includes(novaTarefa.toLowerCase());
  if (tarefaJaExiste) {
    console.clear();
    console.log("\nEsta tarefa já existe na lista de tarefas.\n");
  } else {
    const tarefaFormatada = novaTarefa.charAt(0).toUpperCase() + novaTarefa.slice(1).toLowerCase();

    listaDeTarefas.push(tarefaFormatada);
    console.log(`\nTarefa "${tarefaFormatada}" adicionada com sucesso!\n`);
  }
}

iniciarApp();