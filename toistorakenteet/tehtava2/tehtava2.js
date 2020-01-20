function neliojuuri() {
    let luku = -1;
    while (luku < 0){
        luku = prompt("Anna kokonaisluku, josta lasketaan neliöjuuri:");
    }
    alert("Luvun " + luku + " neliöjuuri on " + Math.sqrt(luku));
}