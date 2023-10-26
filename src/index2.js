const readline = require('readline');

let produtos = [];

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
        let produto = await askQuestion('Digite o nome do produto: ');
        produtos.push(produto);
        console.log('Produto cadastrado com sucesso!');
        break;
      case '2':
        console.clear();
        if (produtos.length === 0) {
          console.log('Nenhum produto cadastrado.');
        } else {
          console.log('***** PRODUTOS CADASTRADOS *****');
          produtos.forEach((produto, index) => {
            console.log(`${index + 1}: ${produto}`);
          });
        }
        break;
      case '3':
        console.clear();
				console.log(produtos);
        let editar = await askQuestion('Digite o nome do produto a ser editado: ');
        let novoProduto = await askQuestion('Digite o novo nome do produto: ');

        const indiceEditar = produtos.findIndex((produto) => produto === editar);

        if (indiceEditar !== -1) {
          produtos[indiceEditar] = novoProduto;
          console.log('Produto editado com sucesso!');
        } else {
          console.log('Produto não encontrado!');
        }
        break;
      case '4':
				console.clear();
				console.log(produtos);
				let id = await askQuestion('Digite o ID do produto: ');
				const indice = id - 1;

				if (indice >= 0 && indice < produtos.length) {
					console.log(`Produto: ${produtos[indice]}`);
				} else {
					console.log('Produto não encontrado!');
				}
				break;
      case '5':
        console.clear();
				console.log(produtos);
        let remover = await askQuestion('Digite o nome do produto a ser removido: ');

        const indiceRemocao = produtos.findIndex((produto) => produto === remover);

        if (indiceRemocao !== -1) {
          produtos.splice(indiceRemocao, 1);
          console.log('Produto removido com sucesso!');
        } else {
          console.log('Produto não encontrado!');
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
