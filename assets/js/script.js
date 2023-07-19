let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

// ANO, MÊS, DIA, HORA, MINUTO
let endDate = new Date(2023, 8, 7, 12, 0);
let endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;

    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr

    let addZeros = num => num < 10 ? `0${num}` : num;


    if (endTime < todayTime) {
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = `<h1>Coutdown has Expired!</h1>`;
    } else {
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        dayBox.textContent = addZeros(daysLeft);
        hrBox.textContent = addZeros(hrsLeft);
        minBox.textContent = addZeros(minsLeft);
        secBox.textContent = addZeros(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();