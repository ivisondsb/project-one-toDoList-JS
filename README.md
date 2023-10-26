# project-one-toDoList-JS

## Projeto desenvolvido pelo grupo 4 para o primeiro módulo da formação back-end.

### Equipe

- Ivison Silva
- Edson Suraty
- Luis Otávio
- Gabriela Moura
- Suamy Vasconcelos

### Prof: Everton da Silva

### Módulo: Lógica de Programação (JS/TS)

### Explicando o funcionamento do menu (Edson):

- A função iniciarApp é chamada, iniciando um loop while que executa continuamente até que a função selecionarOpcao retorne false.

- Dentro de selecionarOpcao, dependendo da opção escolhida no menu, diferentes ações são executadas, como adicionar uma tarefa, editar uma tarefa, remover uma tarefa, listar todas as tarefas, obter uma tarefa por ID ou sair do programa. Se a função querContinuar retornar true, o loop while continua executando.

- Dentro de querContinuar, há um loop while que solicita ao usuário que digite 'S' para continuar ou 'N' para parar. Se o usuário digitar qualquer outra coisa, o programa imprime "Ação incorreta" e repete a pergunta.

### Explicando a função adicionarTarefa (Edson):

- Dentro de adicionarTarefa, o programa solicita que o usuário insira uma nova tarefa. Ele valida se a entrada é válida e repete a pergunta se não for. O programa também verifica se a tarefa já existe na lista de tarefas. Se a tarefa não existir, ela é formatada com a primeira letra maiúscula e as demais letras minúsculas, e o objeto da nova tarefa é adicionado à lista de tarefas.
