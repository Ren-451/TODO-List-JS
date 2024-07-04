const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Form Submission

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '') {
        alert('Enter a task.');
        return;
    }

    todoInput.value = '';
});

// add task

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    todoList.appendChild(listItem);
}