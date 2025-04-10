const timer = (deadline) => {

    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()

        const formattedHours = String(getTime.hours).padStart(2, '0');
        const formattedMinutes = String(getTime.minutes).padStart(2, '0');
        const formattedSeconds = String(getTime.seconds).padStart(2, '0');

        timerHours.textContent = formattedHours
        timerMinutes.textContent = formattedMinutes
        timerSeconds.textContent = formattedSeconds

        if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval)
            timerHours.textContent = "00"
            timerMinutes.textContent = "00"
            timerSeconds.textContent = "00"
        }
    }
    const idInterval = setInterval(updateClock, 1000)
    updateClock()
}

export default timer