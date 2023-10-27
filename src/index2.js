const readline = require('readline');

let tarefas = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para exibir o menu
function exibirMenu() {
  console.log('\n************* MENU *************\n');
  console.log('1º Adicionar uma tarefa');
  console.log('2º Listar todas as tarefas');
  console.log('3º Editar uma tarefa');
  console.log('4º Obter uma tarefa por ID');
  console.log('5º Remover uma tarefa');
  console.log('6º Finalizar');
}

// Loop do-while
(async function () {
  let opcao;

  do {
    exibirMenu();
    opcao = await askQuestion('Escolha uma opção: ');

    switch (opcao) {
      case '1':
        console.clear();
        let tarefa = await askQuestion('Digite o nome da tarefa: ');
        tarefas.push(tarefa);
        console.log('Tarefa cadastrada com sucesso!');
        break;
      case '2':
        console.clear();
        if (tarefas.length === 0) {
          console.log('Nenhuma tarefa cadastrada.');
        } else {
          console.log('***** TAREFAS CADASTRADAS *****');
          tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}: ${tarefa}`);
          });
        }
        break;
      case '3':
        console.clear();
				console.log(tarefas);
        let editar = await askQuestion('Digite o nome da tarefa a ser editado: ');
        let novotarefa = await askQuestion('Digite o novo nome da tarefa: ');

        const indiceEditar = tarefas.findIndex((tarefa) => tarefa === editar);

        if (indiceEditar !== -1) {
          tarefas[indiceEditar] = novotarefa;
          console.log('tarefa editada com sucesso!');
        } else {
          console.log('tarefa não encontrada!');
        }
        break;
      case '4':
				console.clear();
				console.log(tarefas);
				let id = await askQuestion('Digite o ID da tarefa: ');
				const indice = id - 1;

				if (indice >= 0 && indice < tarefas.length) {
					console.log(`Tarefa: ${tarefas[indice]}`);
				} else {
					console.log('Tarefa não encontrada!');
				}
				break;
      case '5':
        console.clear();
				console.log(tarefas);
        let remover = await askQuestion('Digite o nome da tarefa a ser removida: ');

        const indiceRemocao = tarefas.findIndex((tarefa) => tarefa === remover);

        if (indiceRemocao !== -1) {
          tarefas.splice(indiceRemocao, 1);
          console.log('Tarefa removida com sucesso!');
        } else {
          console.log('Tarefa não encontrada!');
        }
        break;
      case '6':
        console.clear();
        console.log('Obrigado por utilizar o sistema!');
        break;
      default:
        console.clear();
        console.log('Opção inválida!');
    }
  } while (opcao !== '6');

  rl.close();
})();

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}
