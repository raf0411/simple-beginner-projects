let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'watch anime',
  dueDate: '2023-02-02'
}, {
  name: 'get a life',
  dueDate: '2099-12-31'
}];

displayTodo();

const todoInput = document.querySelector('.js-todo-input');
const dueDateInput = document.querySelector('.js-due-date-input');
const addButton = document.querySelector('.js-add-button');
const clearButton = document.querySelector('.js-clear-button');

addButton.addEventListener('click', () => {
  addTodo();
});

clearButton.addEventListener('click', () => {
  clear();
});

function displayTodo() {
  const todoListDiv = document.querySelector('.js-todo-lists');
  let innerHTML = '';
  
  for (let i = 0; i < todoList.length; i++){
    innerHTML += `  
    <div class="inner-container">
      <input type="checkbox">
      <div class="name-date-container">
        <p class="todo-name">
          ${todoList[i].name}
        </p>
        <p class="todo-date">
          Due Date: ${todoList[i].dueDate}
        </p>
      </div>
      <button class="delete-button" 
      onclick=
      "
        todoList.splice(${i}, 1);
        displayTodo();
        saveToStorage();
      ">
        &#10005
      </button>
    </div>
    `
  }

  todoListDiv.innerHTML = innerHTML;
}

function addTodo() {

  if (!todoInput.value || !dueDateInput.value) {
    alert('Please Enter a valid task and due date!');
  }
  else {
    const name = todoInput.value;
    const dueDate = dueDateInput.value;

    todoList.push({
      name,
      dueDate
    });

    saveToStorage();
    displayTodo();

    todoInput.value = '';
    dueDateInput.value = '';
  } 
}

function clear() {
  todoList = [];
  displayTodo();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}