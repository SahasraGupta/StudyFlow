let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let completed = tasks.filter(t => t.done).length;
let total = tasks.length;

document.getElementById("tasks").textContent =
  `${completed} / ${total}`;
  let seconds = parseInt(localStorage.getItem("studyTime")) || 0;

let hrs = Math.floor(seconds / 3600);
let mins = Math.floor((seconds % 3600) / 60);

document.getElementById("timeSpent").textContent =
  `${hrs}h ${mins}m`;
  let today = new Date().toDateString();
let lastDate = localStorage.getItem("lastVisit");
let streak = parseInt(localStorage.getItem("streak")) || 0;

if (lastDate === today) {
  // already visited today → do nothing
} else {
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastDate === yesterday.toDateString()) {
    streak++;  // continue streak
  } else {
    streak = 1;  // reset
  }

  localStorage.setItem("streak", streak);
  localStorage.setItem("lastVisit", today);
}

document.getElementById("streak").textContent =
  `${streak} days 🔥`;