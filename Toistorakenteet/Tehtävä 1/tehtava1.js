function kertoma() {
    let luku = prompt("Anna kokonaisluku:", "50");
    let kertoma = 1;
    if(luku / Math.floor(luku) == 1){
        for(let i = 1; i <= luku; i++){
            kertoma *= i;
        }
        alert("Luvun " + luku + " kertoma on " + kertoma);
    } else {
        alert("Luku ei ole kokonaisluku!");
    }
}