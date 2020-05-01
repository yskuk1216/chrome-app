const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";

function paintTodos(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    span.innerText = text;
    delBtn.value = "X";

    li.appendChild(span);
    li.appendChild(delBtn);

    todoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodos(currentValue);

}

function loadTodos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();