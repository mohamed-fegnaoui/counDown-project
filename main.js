// select elements


const daysIn = document.querySelector(".days");
const hoursIn = document.querySelector(".hours");
const minutesIn = document.querySelector(".minutes");
const secondsIn = document.querySelector(".seconds");

// the end fo the year date  to countDown to

let countDownDate = new Date("Jan 19 , 2024 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60) / (1000 * 60)));
    let seconds = Math.floor((dateDiff % (1000 * 60) / 1000));
    daysIn.innerHTML = `0${days}`;
    hoursIn.innerHTML = `0${hours}`;
    minutesIn.innerHTML = minutes;
    secondsIn.innerHTML = seconds;
}, 1000);

























































    





















   


























