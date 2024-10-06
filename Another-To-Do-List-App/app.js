const inputTask = document.querySelector(".input-task");
const addBtn = document.querySelector(".add-btn");
const lists = document.querySelector(".list-container")

displayTask();

lists.addEventListener('click',
  function removeTask(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle("checked");
      saveData();
    }
    else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  }
  , false);

function addTask() {
  if (inputTask.value === '') {
    alert("Please add a valid task!")
  }
  else {
    let task = document.createElement("li");
    task.innerHTML = inputTask.value;
    lists.appendChild(task);

    let delTask = document.createElement("span");
    delTask.innerHTML = "\u00d7";
    task.appendChild(delTask);
  }

  inputTask.value = '';
  saveData();
}

function saveData() {
  localStorage.setItem("data", lists.innerHTML)
}

function displayTask() {
  lists.innerHTML = localStorage.getItem("data");
}