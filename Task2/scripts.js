let timerInterval;
let elapsedTime = 0; // in milliseconds
let isRunning = false;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('lap-list');
const display = {
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    milliseconds: document.getElementById('milliseconds')
};

function formatTime(ms) {
    const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(Math.floor(ms % 1000 / 10)).padStart(2, '0');
    return { hours, minutes, seconds, milliseconds };
}

function updateDisplay() {
    const time = formatTime(elapsedTime);
    display.hours.textContent = time.hours;
    display.minutes.textContent = time.minutes;
    display.seconds.textContent = time.seconds;
    display.milliseconds.textContent = time.milliseconds;
}

function startTimer() {
    if (!isRunning) {
        timerInterval = setInterval(() => {
            elapsedTime += 10; // increment by 10ms
            updateDisplay();
        }, 10);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    lapList.innerHTML = ''; // clear lap times
}

function addLap() {
    if (isRunning) {
        const time = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `${time.hours}:${time.minutes}:${time.seconds}:${time.milliseconds}`;
        lapList.appendChild(lapItem);
    }
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', addLap);
