const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
}

function loadToDo() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    } else {

    }
}

function init() {
    loadToDo();
    todoForm.addEventListener("submit", handleSubmit)
}

init();