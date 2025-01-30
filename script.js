//
let todos = []

//DOM elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

//Function to render todos
function renderTodos()
 {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'flex gap-5 items-center mb-2';
        li.innerHTML = `
        <p>${todo}</p>
        <button class='btn btn-success' onclick='editTodo(${index})'>Edit</button>
        <button class='btn btn-error' onclick='deleteTodo(${index})'>Delete</button>`
        todoList.append(li)
    })
}




//add todos
function addTodo(e){
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo){
        todos.push(newTodo);
        renderTodos();
    }
}

//edit todos
function editTodo(index){
    const updateTodo = prompt('Edit your todo: ' + todos[index]);
    if (updateTodo) 
    {
        todos[index] = updateTodo.trim();  
        renderTodos();  
    }
}


todoForm.addEventListener("submit", addTodo)


//delete todos
function deleteTodo(index) {
    delete todos[index]
    renderTodos();
}


//initial render for the todo list 
renderTodos();