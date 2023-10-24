// Projeto finalização do curso de I lógica de programação.

const tasks /* Presença */ = [presente, falta, alterar];
//const tasks = [kamehameha, kaioken, genki dama];
//const pokemonCharmander = [bolaDeFogo, raboDeFogo, cabeçada];
//const cavaleiroDosZodiacos = [meteoroDePegasus, aveFenix, coleraDoDragão]

//Edson
function addTask(description) {
  const task = { id: tasks.length + 1, description };
  tasks.push(task);
}

//Gabriela
function editTask(id, newDescription) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.description = newDescription;
  }
}

//Ivison
function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}

//Luis
function listTasks() {
  const taskList = document.getElementById("task-list"); // Suponha que você tenha um elemento com esse ID no seu HTML
  taskList.innerHTML = ""; // Limpa a lista
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.description;
    taskList.appendChild(listItem);
  });
}

//Suamy
function getTaskById(id) {
  return tasks.find((task) => task.id === id);
}
