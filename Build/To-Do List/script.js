// Select elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add a new task
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input value
    const taskText = todoInput.value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = '';
});
