function setTime() {
    let date = new Date();
    let hour = setNolla(date.getHours());
    let minutes = setNolla(date.getMinutes());
    let seconds = setNolla(date.getSeconds());
    let time = hour + ":" + minutes + ":" + seconds;
    console.log(time);
    document.getElementById("kello").innerHTML = time;
}

function setNolla(luku) {
    if(luku >= 0 && luku < 10){
        return "0" + luku;
    }
    return luku;
}

setInterval(setTime, 1000);