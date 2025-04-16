// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim(); // Get the text entered by the user

  if (taskText !== '') {
    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    
    // Add the new task to the list
    taskList.appendChild(li);
    
    // Clear the input field after adding a task
    taskInput.value = '';
  }
}

// Function to delete a task
function deleteTask(button) {
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}

// Function to mark task as completed
taskList.addEventListener('click', function(e) {
  if (e.target.classList.contains('task-text')) {
    e.target.classList.toggle('completed');
  }
});
