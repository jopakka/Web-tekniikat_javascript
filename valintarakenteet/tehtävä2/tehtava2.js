function askNimi(){
    let nimi = prompt("Anna nimesi:", "Make");
    let tupa1 = "Rohkelikko";
    let tupa2 = "Luihuinen";
    let tupa3 = "Puuskupuh";
    let tupa4 = "Korpinkynsi";
    let luku = Math.floor(Math.random() * 4) + 1;
    if(luku == 1){
        alert(nimi + ", olet " + tupa1);
    } else if(luku == 2) {
        alert(nimi + ", olet " + tupa2);
    } else if(luku == 3) {
        alert(nimi + ", olet " + tupa3);
    } else {
        alert(nimi + ", olet " + tupa4);
    }
}
