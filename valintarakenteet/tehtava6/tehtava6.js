function askYear(){
    let year = prompt("Anna vuosiluku:", "2000");

    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        alert("Vuosi on karkausvuosi.");
    } else {
        alert("Vuosi ei ole karkausvuosi.");
    }
}
