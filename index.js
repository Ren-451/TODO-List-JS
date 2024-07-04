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
    addTask(newTask);
});

// add task

function addTask(task) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    listItem.appendChild(editButton);

    const listItem = document.createElement('li');
    listItem.textContent = task;
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
}

// task completion 

checkBox.addEventListener('change', function() {
    if (this.checked) {
        taskText.style.textDecoration = 'line-through';
    }
    else {
        taskText.style.textDecoration = 'none';
    }
});

// delete
deleteButton.addEventListener('click', function() {
    todoList.replaceChild(listItem);
});