let subject = localStorage.getItem("selectedSubject");
let editIndex = -1;   // 🔥 global (important)

/* set title */
document.getElementById("title").textContent =
  subject + " Schedule";

/* show form */
function showForm() {
  document.getElementById("formBox").style.display = "block";
}

/* hide form */
function hideForm() {
  document.getElementById("formBox").style.display = "none";
}

/* add or edit schedule */
function addSchedule() {
  const time = document.getElementById("time").value;
  const topic = document.getElementById("topic").value;

  if (!time || !topic) return;

  let data = JSON.parse(localStorage.getItem("schedule")) || {};

  if (!data[subject]) {
    data[subject] = [];
  }

  if (editIndex === -1) {
    // ➕ add new
    data[subject].push({ time, topic });
  } else {
    // ✏️ update
    data[subject][editIndex].time = time;
    data[subject][editIndex].topic = topic;
    editIndex = -1;
  }

  localStorage.setItem("schedule", JSON.stringify(data));

  displaySchedule();

  // clear inputs
  document.getElementById("time").value = "";
  document.getElementById("topic").value = "";

  hideForm();
}

/* display schedule */
function displaySchedule() {
  const list = document.getElementById("scheduleList");
  list.innerHTML = "";

  let data = JSON.parse(localStorage.getItem("schedule")) || {};
  let items = data[subject] || [];

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";   // 🔥 important

    div.innerHTML = `
      <div class="item-left">
        <span class="time">${item.time}</span>
        <span class="topic">${item.topic}</span>
      </div>

      <div class="item-right">
        <span onclick="editItem(${index})">✏️</span>
        <span onclick="deleteItem(${index})">🗑</span>
      </div>
    `;

    list.appendChild(div);
  });
}

/* delete */
function deleteItem(index) {
  let data = JSON.parse(localStorage.getItem("schedule")) || {};

  data[subject].splice(index, 1);

  localStorage.setItem("schedule", JSON.stringify(data));

  displaySchedule();
}

/* edit */
function editItem(index) {
  let data = JSON.parse(localStorage.getItem("schedule")) || {};

  const item = data[subject][index];

  document.getElementById("time").value = item.time;
  document.getElementById("topic").value = item.topic;

  editIndex = index;

  showForm();
}

/* load */
window.onload = displaySchedule;