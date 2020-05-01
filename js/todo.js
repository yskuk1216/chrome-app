const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteTodos(event) {
    const btn = event.target;
    const li = btn.parentNode;

    todoList.removeChild(li);

    const cleanTodos = toDos.filter(function (todo) {
        return todo.id !== parseInt(li.id);
    })

    toDos = cleanTodos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodos(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;

    span.innerText = text;
    delBtn.value = "X";
    delBtn.addEventListener("click", deleteTodos);

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    todoList.appendChild(li);

    toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodos(currentValue);
    todoInput.value = "";

}

function loadTodos() {
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if (loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function (todo) {
            paintTodos(todo.text);
        })
    }
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();