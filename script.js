const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("AmPm");

const countdownButton = document.getElementById("countdownButton");
const weatherButton = document.getElementById("weatherButton");
const timeFactButton = document.getElementById("timeFactButton");

function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";
  const formattedH = h < 10 ? "0" + h : h;
  const formattedM = m < 10 ? "0" + m : m;
  const formattedS = s < 10 ? "0" + s : s;

  hourEl.innerText = formattedH;
  minuteEl.innerText = formattedM;
  secondEl.innerText = formattedS;
  ampmEl.innerText = ampm;
}

function startCountdown() {
  // Calculate the time remaining until New Year (January 1st, next year)
  const now = new Date();
  const currentYear = now.getFullYear();
  const newYear = new Date(currentYear + 1, 0, 1);
  const timeRemaining = newYear - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the popup
  popup.style.display = "block";
  countdownPopup.innerHTML = `
    <div class="countdown">
      <div>${days}</div>
      <span>Days</span>
      <div>${hours}</div>
      <span>Hours</span>
      <div>${minutes}</div>
      <span>Minutes</span>
      <div>${seconds}</div>
      <span>Seconds</span>
    </div>
  `;

  // Hide the popup after New Year arrives
  setTimeout(() => {
    popup.style.display = "none";
  }, timeRemaining);
  
}

function displayWeather() {
  // Add your weather information retrieval and display logic here
}

function displayTimeFact() {
  // Add your time fact retrieval and display logic here
}

countdownButton.addEventListener("click", startCountdown);
weatherButton.addEventListener("click", displayWeather);
timeFactButton.addEventListener("click", displayTimeFact);

updateClock();
setInterval(updateClock, 1000);
