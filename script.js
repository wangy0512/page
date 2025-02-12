function getRandomTime() {
    return {
        days: Math.floor(Math.random() * 10),
        hours: Math.floor(Math.random() * 24),
        minutes: Math.floor(Math.random() * 60),
        seconds: Math.floor(Math.random() * 60)
    };
}

function startCountdown(id, time) {
    function updateCountdown() {
        if (time.seconds > 0) {
            time.seconds--;
        } else if (time.minutes > 0) {
            time.minutes--;
            time.seconds = 59;
        } else if (time.hours > 0) {
            time.hours--;
            time.minutes = 59;
            time.seconds = 59;
        } else if (time.days > 0) {
            time.days--;
            time.hours = 23;
            time.minutes = 59;
            time.seconds = 59;
        } else {
            document.getElementById(id).textContent = "倒計時結束！";
            clearInterval(interval);
            return;
        }
        document.getElementById(id).textContent = `${time.days}天 ${time.hours}小時 ${time.minutes}分鐘 ${time.seconds}秒`;
    }

    updateCountdown();
    let interval = setInterval(updateCountdown, 1000);
}

startCountdown("countdown1", getRandomTime());
startCountdown("countdown2", getRandomTime());
startCountdown("countdown3", getRandomTime());
startCountdown("countdown4", getRandomTime());