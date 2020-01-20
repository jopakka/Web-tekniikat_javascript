function askSqrt(){
    let opinion = window.confirm("Lasketaanko neliöjuuri?");
    let luku;
    if(opinion == true){
        luku = prompt("Anna luku:", "50");
        if(luku >= 0){
            alert("Luvun " + luku + " neliöjuuri on " + Math.sqrt(luku));
        } else {
            alert("Negatiivisen luvun neliöjuuri ei ole määritelty");
        }
    } else {
        alert("Neliöjuurta ei lasketa.");
    }
}
