document.getElementById("task-1").value = localStorage.getItem("9:00am");
document.getElementById("task-2").value = localStorage.getItem("10:00am");
document.getElementById("task-3").value = localStorage.getItem("11:00am");
document.getElementById("task-4").value = localStorage.getItem("12:00am");
document.getElementById("task-5").value = localStorage.getItem("1:00pm");
document.getElementById("task-6").value = localStorage.getItem("2:00pm");
document.getElementById("task-7").value = localStorage.getItem("3:00pm");
document.getElementById("task-8").value = localStorage.getItem("4:00pm");
document.getElementById("task-9").value = localStorage.getItem("5:00pm");

let currentTime = moment();
let dayEl = document.getElementById("day");

function setDay() {
    dayEl.innerHTML = moment(currentTime).format("dddd MMM Mo YYYY");
}

setDay();

let time1El = document.getElementById("time-1");
let time2El = document.getElementById("time-2");
let time3El = document.getElementById("time-3");
let time4El = document.getElementById("time-4");
let time5El = document.getElementById("time-5");
let time6El = document.getElementById("time-6");
let time7El = document.getElementById("time-7");
let time8El = document.getElementById("time-8");
let time9El = document.getElementById("time-9");

time1El = moment(9, "HH");
time2El = moment(10, "HH");
time3El = moment(11, "HH");
time4El = moment(12, "HH");
time5El = moment(13, "HH");
time6El = moment(14, "HH");
time7El = moment(15, "HH");
time8El = moment(16, "HH");
time9El = moment(17, "HH");

let input1 = document.getElementById("task-1");
let input2 = document.getElementById("task-2");
let input3 = document.getElementById("task-3");
let input4 = document.getElementById("task-4");
let input5 = document.getElementById("task-5");
let input6 = document.getElementById("task-6");
let input7 = document.getElementById("task-7");
let input8 = document.getElementById("task-8");
let input9 = document.getElementById("task-9");

function setColor() {
    if (moment(time1El).isBefore(moment(currentTime))) {
        input1.classList.add("gray")
    } else {
        input1.classList.add("green")
    }
    if (moment(time2El).isBefore(moment(currentTime))) {
        input2.classList.add("gray")
    } else {
        input2.classList.add("green")
    }
    if (moment(time3El).isBefore(moment(currentTime))) {
        input3.classList.add("gray")
    } else {
        input3.classList.add("green")
    }
    if (moment(time4El).isBefore(moment(currentTime))) {
        input4.classList.add("gray")
    } else {
        input4.classList.add("green")
    }
    if (moment(time5El).isBefore(moment(currentTime))) {
        input5.classList.add("gray")
    } else {
        input5.classList.add("green")
    }
    if (moment(time6El).isBefore(moment(currentTime))) {
        input6.classList.add("gray")
    } else {
        input6.classList.add("green")
    }
    if (moment(time7El).isBefore(moment(currentTime))) {
        input7.classList.add("gray")
    } else {
        input7.classList.add("green")
    }
    if (moment(time8El).isBefore(moment(currentTime))) {
        input8.classList.add("gray")
    } else {
        input8.classList.add("green")
    }
    if (moment(time9El).isBefore(moment(currentTime))) {
        input9.classList.add("gray")
    } else {
        input9.classList.add("green")
    }
}

setColor();