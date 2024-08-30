// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskText = taskInput.value;
    const taskDateTimeValue = taskDateTime.value;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <span>${taskDateTimeValue}</span>
        <button onclick="markComplete(this)">Complete</button>
        <button onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    // Clear input fields
    taskInput.value = '';
    taskDateTime.value = '';
}

// Function to mark a task as completed
function markComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

// Function to edit a task
function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newTaskText = prompt('Edit task:', span.textContent);

    if (newTaskText !== null) {
        span.textContent = newTaskText;
    }
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
