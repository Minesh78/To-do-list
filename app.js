//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

//Event listeners
todoButton.addEventListener("click",addTodo);



//Functions
function addTodo(event){
    event.preventDefault();
}