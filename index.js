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

// edit

editButton.addEventListener('click', function() {
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        taskText.textContent = this.previousSibling.value;
        listItem.classList.remove('editing');
        editButton.textContent = 'Edit';
    }

    else {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText.textContent;
        listItem.insertBefore(input, taskText);
        listItem.removeChild(taskText);
        listItem.classList.add('editing');
        editButton.textContent = 'Save';
    }
});

// save tasks to local

function saveTasksToLocalStorage(){
    const tasks = [];
    document.querySelectorAll('#todo-list li').forEach(task => {
        const taskText = task.querySelector('span').textContent;
        const isCompleted = task.classList.contains('completed');
        tasks.push({ text: taskText, completed: isCompleted});
    });
    localStorage.setItem('tasks', JSON,stringify(tasks));
}

// load task from local

document.addEventListener('DOMContentLoaded', function() {
    const saveTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    saveTasks.forEach(task => {
        addTask(task.text);
    });
});