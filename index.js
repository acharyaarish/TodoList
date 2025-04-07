const todoInput = document.querySelector(".todo-input");
const saveTodo = document.querySelector(".save-todo");
const todoOutcome = document.querySelector(".todo-outcome-ul");

// Function to show a notification
function showNotification(message) {
  // Check if a notification already exists
  let notificationBar = document.querySelector(".notification-bar");

  // If it doesn’t exist, create and append it
  if (!notificationBar) {
    notificationBar = document.createElement("div");
    notificationBar.classList.add("notification-bar");
    document.body.appendChild(notificationBar); // Fixed: Use appendChild
  }

  // Set the message and show it
  notificationBar.textContent = message;
  notificationBar.classList.add("show");

  // Hide after 3 seconds
  setTimeout(() => {
    notificationBar.classList.remove("show");
  }, 3000);
}

saveTodo.addEventListener("click", (e) => {
  e.preventDefault();

  // Check for empty input and show notification
  if (todoInput.value.trim() === "") {
    showNotification("Enter a value, empty todo cannot be saved!");
    return;
  }

  // Creating new todo item container
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");

  // Creating span for todo text
  const todoText = document.createElement("span");
  todoText.textContent = todoInput.value;
  todoText.classList.add("todo-text");

  // Creating edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your todo:", todoText.textContent);
    if (newText !== null && newText.trim() !== "") {
      todoText.textContent = newText;
    }
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    newTodo.remove();
  });

  // Appending elements to the todo item
  newTodo.appendChild(todoText);
  newTodo.appendChild(editBtn);
  newTodo.appendChild(deleteBtn);

  // Adding the todo item to the list
  todoOutcome.appendChild(newTodo);

  // Clear the input after saving todo
  todoInput.value = "";
});
