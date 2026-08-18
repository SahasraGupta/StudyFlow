let timeLeft = 0;
let timer = null;
let originalTime = 0; // 🔥 store session time

/* DISPLAY */
function updateDisplay() {
  let hrs = Math.floor(timeLeft / 3600);
  let mins = Math.floor((timeLeft % 3600) / 60);
  let secs = timeLeft % 60;

  document.getElementById("time").textContent =
    `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

/* START */
function startTimer() {
  if (timer) return;

  // take input only if fresh
  if (timeLeft === 0) {
    let h = parseInt(document.getElementById("hours").value) || 0;
    let m = parseInt(document.getElementById("minutes").value) || 0;
    let s = parseInt(document.getElementById("seconds").value) || 0;

    timeLeft = h * 3600 + m * 60 + s;

    originalTime = timeLeft; // 🔥 store full session time
  }

  if (timeLeft <= 0) {
    alert("Enter time first");
    return;
  }

  timer = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;

      // 🔥 ADD SESSION TO TOTAL
      let current = parseInt(localStorage.getItem("studyTime")) || 0;
      current += originalTime;
      localStorage.setItem("studyTime", current);

      // 🔊 sound
      let sound = document.getElementById("alarmSound");
      if (sound) sound.play();
    }

    updateDisplay();
  }, 1000);
}

/* PAUSE */
function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

/* RESET */
function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeLeft = 0;
  updateDisplay();

  let sound = document.getElementById("alarmSound");
  if (sound) {
    sound.pause();
    sound.currentTime = 0;
  }
}

/* INITIAL */
window.onload = () => {
  updateDisplay();
};