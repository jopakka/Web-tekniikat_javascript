function kokous() {
    let ehdokkaat = Number(prompt("Kuinka monta ehdokasta"));
    let aanestajat = Number(prompt("Kuinka monta äänestäjää"));
    let aanet = [];

    for(let i = 0; i < ehdokkaat; i++){
        aanet[i] = 0;
    }

    for(let i = 0; i < aanestajat; i++){
        let aani = Number(prompt("Äänestäjä " + (i + 1) + " ääni:"));
        while(aani < 1 || aani > ehdokkaat){
            aani = Number(prompt("Äänestäjä " + (i + 1) + " virheellinen ääni. Anna uusi ääni:"));
        }
        aanet[aani - 1] = aanet[aani - 1] + 1;
    }

    let voittaja = 0;
    for(let i = 0; i < aanet.length; i++){
        if(aanet[i] > aanet[voittaja]){
            voittaja = i;
        }
    }

    let p = document.createElement("p");
    p.innerHTML = "Voittaja on ehdokasnumero " + (voittaja + 1);
    document.body.appendChild(p);
}