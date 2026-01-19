const STATES = {
    Working: {color: "#FF6961", time: 1500, title: "It's time to work"},
    ShortBreak: {color: "#AEC6CF", time: 300, title: "Take a short break"},
    LongBreak: {color: "#C1E1C1", time: 900, title: "Take a long break"}
}

let state = STATES.Working
let timerActive = false
let currentTime = state.time
let firstTime = true

let shortBreaks = 1
let shortPerLong = 4

const timerControlButton = document.getElementById("start_stop")
const nextButton = document.getElementById("next")
let timerInterval

updateTimer()
updateTitle()
updateTimerActive(false)

/**
 * Changes the state of the timer and updates the UI accordingly
 *
 * @param newState
 */
function changeState(newState) {
    if (state !== newState) {
        document.getElementsByTagName("body")[0].style.backgroundColor = newState.color
        state = newState
        if (newState !== STATES.Working && countUp)
            shortBreaks++
        updateTimerActive(false)
        currentTime = state.time
        updateTimer()
        updateTitle()
    }
}

function updateTimer() {
    const minutes = Math.floor(currentTime / 60)
    const seconds = currentTime % 60
    document.getElementById("time").innerHTML = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0')
}

function updateTitle() {
    const minutes = Math.floor(currentTime / 60)
    const seconds = currentTime % 60
    const time = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0')
    document.title = `${state.title} - ${time}`
}

/**
 * Decrements the current time by 1 second or if specified otherwise
 *
 * @param by How much it is supposed to countdown by
 * @param playChime
 */
function countdown(by = 1, playChime = true) {
    currentTime -= by
    if (currentTime < 0) {
        if(playChime) playEndChime()
        if (state === STATES.Working) {
            if (shortBreaks % shortPerLong === 0) changeState(STATES.LongBreak)
            else changeState(STATES.ShortBreak)
        } else {
            changeState(STATES.Working)
        }
        updateTimerActive(false)
    }
    updateTimer()
    updateTitle()
}

/**
 * Toggles the timer on and off
 *
 * @param value New timer state
 */
function updateTimerActive(value) {
    if (value) {
        timerControlButton.innerHTML = "Stop timer"
        timerInterval = setInterval(countdown, 1000)
    } else {
        timerControlButton.innerHTML = "Start timer"
        clearInterval(timerInterval)
    }
    timerActive = value
}

timerControlButton.addEventListener("click", () => {
    updateTimerActive(!timerActive)
})

nextButton.addEventListener("click", () => {
    countdown(100000000000000, false)
})


function playEndChime() {
    const audio = new Audio('src/end.mp3')
    audio.play()
}