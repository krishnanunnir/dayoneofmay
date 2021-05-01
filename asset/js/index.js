var countdownNumberEl = document.getElementById('countdown-number');
var timerPlayPauseImgSrc = document.querySelector("#countdown-start a img");
var countdown = 60;
var intervalOFExecution;
var timerState = false;
var timerStart = function() {
    if (timerState) {
        timerClear();
        return;
    }

    timerState = true;
    timerPlayPauseImgSrc.src = "asset/images/pause-circle.svg"
    countdown = countdown - 1;
    countdownNumberEl.textContent = countdown;
    intervalOFExecution = setInterval(function() {
        countdown = countdown - 1;
        if (countdown < 0) {
            countdown = 60;
            timerClear();
        }
        countdownNumberEl.textContent = countdown;
    }, 1000);
}

var timerClear = function() {
    timerState = false;
    timerPlayPauseImgSrc.src = "asset/images/play-circle.svg"
    clearInterval(intervalOFExecution);
}


var timerClear60 = function() {
    countdown = 60;
    countdownNumberEl.textContent = countdown;
    timerClear();
}

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

alert(datediff(parseDate(first.value), parseDate(second.value)));