
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function addTask() {
  const task = taskInput.value;
  
 
  if (task.trim() !== '' ) {  //&& desk.trim() !== ''
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    span.textContent = task;
    deleteButton.textContent = 'Delete';

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';

    deleteButton.addEventListener('click', deleteTask);
  }
}

function deleteTask(event) {
  const li = event.target.parentElement;
  taskList.removeChild(li);
}

addButton.addEventListener('click', addTask);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (const task of tasks) {
      createTaskElement(task);
    }
  }

