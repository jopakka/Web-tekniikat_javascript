function todennakoisyys() {
    let nopat = Number(prompt("Arpakuutioiden lukumäärä"));
    let haluttuSumma = Number(prompt("Haluttu silmälukujen summa"));

    let p = document.createElement("p");

    if(haluttuSumma < nopat || nopat * 6 > haluttuSumma){
        p.innerHTML = "Summa ei ole mahdollinen";
        document.body.appendChild(p);
        return;
    }

    let maara = 0;

    for(let i = 0; i < 10000; i++){
        if(Number(Math.floor(Math.random() * 6) + 1) === haluttuSumma){
            maara++;
        }
    }

    p.innerHTML = "Todennäköisyys saada " + haluttuSumma + ", " + nopat + ":lla nopalla on " + (maara / 10000 * 100) + "%";

    document.body.appendChild(p);
}