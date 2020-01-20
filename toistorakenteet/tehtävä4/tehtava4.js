function arpakuutiot() {
    let maara = prompt("Kuinka monta arpakuutiota:");
    let summa = 0;

    for(let i = 0; i < maara; i++){
        summa += Math.floor(Math.random() * 6) + 1;
    }

    let p = document.createElement("p");
    p.innerHTML = "Arpakuutioiden summa: " + summa;
    document.body.appendChild(p);

}