function showForm() {
  document.getElementById("formBox").style.display = "block";
}

function hideForm() {
  document.getElementById("formBox").style.display = "none";
}

function addNote() {
  const title = document.getElementById("noteTitle").value;
  const text = document.getElementById("noteText").value;

  if (!title.trim()) return;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  if (editNoteIndex === -1) {
    // ➕ new note
    notes.push({ title, text });
  } else {
    // ✏️ update existing
    notes[editNoteIndex].title = title;
    notes[editNoteIndex].text = text;
    editNoteIndex = -1;
  }

  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();

  document.getElementById("noteTitle").value = "";
  document.getElementById("noteText").value = "";

  hideForm();
}

function displayNotes() {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      <h4 onclick="openNote(${index})">${note.title}</h4>
      <span onclick="deleteNote(${index})">🗑</span>
    `;

    notesList.appendChild(div);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();
}
function openNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  const note = notes[index];

  document.querySelector(".notes-container").innerHTML = `
    <div class="full-note">
      <h2>${note.title}</h2>
      <p>${note.text || ""}</p>

      <div class="btns">
        <button class="edit-btn" onclick="editNote(${index})">✏️ Edit</button>
        <button class="back-btn" onclick="goBack()">⬅ Back</button>
      </div>
    </div>
  `;
}
let editNoteIndex = -1;

function editNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  const note = notes[index];

  document.getElementById("noteTitle").value = note.title;
  document.getElementById("noteText").value = note.text;

  editNoteIndex = index;

  showForm();
}
function goBack() {
  location.reload();   // 🔥 easiest fix
}
window.onload = displayNotes;