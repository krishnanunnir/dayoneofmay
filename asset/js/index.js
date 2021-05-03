var countdownNumberEl = document.getElementById('countdown-number');
var timerPlayPauseImgSrc = document.querySelector("#countdown-start a img");
var intervalOFExecution;
var audio = document.getElementById("player");
var timerState = false;
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

difference = dateDiffInDays(new Date("2021-04-30"), new Date());
console.log(difference);
document.getElementById("daycount").textContent = difference;

var initTimeValue = 70 + Math.round(parseInt(difference) / 2 - 0.1) * 10;
var countdown = initTimeValue;
countdownNumberEl.textContent = countdown;
var timerStart = function() {
    if (timerState) {
        timerStop();
        return;
    }
    var countdown = initTimeValue;
    timerState = true;
    audio.play();
    timerPlayPauseImgSrc.src = "asset/images/pause-circle.svg"
    countdown = countdown - 1;
    countdownNumberEl.textContent = countdown;
    intervalOFExecution = setInterval(function() {
        countdown = countdown - 1;
        if (countdown < 0) {
            timerStop();
            return;
        }
        countdownNumberEl.textContent = countdown;
    }, 1000);
}

var timerStop = function() {
    audio.pause();
    timerState = false;
    timerPlayPauseImgSrc.src = "asset/images/play-circle.svg"
    clearInterval(intervalOFExecution);
}


var timerClear = function() {
    countdown = initTimeValue;
    countdownNumberEl.textContent = countdown;
    timerStop();
}