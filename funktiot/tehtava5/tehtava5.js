let nimet = [];
let nimi;

let i = 0;
do {
    nimi = prompt("Anna merkkijonoja. Tyhjä lopettaa");
    if(nimi !== ""){
        nimet[i] = nimi;
        i++;
    }
} while (nimi !== "");

let p = document.createElement("p");
p.innerHTML = liita(nimet);
document.body.appendChild(p);

function liita(nimia) {
    let kaikki = "";
    for(let i = 0; i < nimia.length; i++){
        kaikki += nimia[i];
    }
    return kaikki;
}