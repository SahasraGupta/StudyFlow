// show form
function showForm() {
  document.getElementById("formBox").style.display = "block";
}

// hide form
function hideForm() {
  document.getElementById("formBox").style.display = "none";
}

// add task
function addTask() {
  const name = document.getElementById("taskName").value;
  const note = document.getElementById("taskNote").value;

  if (!name.trim()) return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (editIndex === -1) {
    // ➕ new task
    tasks.push({
      name,
      note,
      done: false
    });
  } else {
    // ✏️ update existing
    tasks[editIndex].name = name;
    tasks[editIndex].note = note;
    editIndex = -1;
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();

  document.getElementById("taskName").value = "";
  document.getElementById("taskNote").value = "";

  hideForm();
}
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task";

div.innerHTML = `
  <input type="checkbox" ${task.done ? "checked" : ""} 
    onchange="toggleTask(${index})">

  <div class="task-content">
    <b style="text-decoration:${task.done ? 'line-through' : 'none'}">
      ${task.name}
    </b>
    <small>${task.note || ""}</small>
  </div>

  <span class="edit" onclick="editTask(${index})">✏️</span>
  <span class="delete" onclick="deleteTask(${index})">🗑</span>
`;

    taskList.appendChild(div);
  });
}
function toggleTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks[index].done = !tasks[index].done;

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}
window.onload = displayTasks;
function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}
let editIndex = -1;

function editTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const task = tasks[index];

  document.getElementById("taskName").value = task.name;
  document.getElementById("taskNote").value = task.note;

  editIndex = index;

  showForm();
}