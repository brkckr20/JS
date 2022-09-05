let name = document.querySelector("#name");


let isim = prompt("İsminizi giriniz!");

name.innerHTML = isim;

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function getClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = checkTime(minutes);
    hours = checkTime(hours);
    document.querySelector("#clock").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(getClock, 1000)
}


getClock();