let luku1 = Number(prompt("Anna eka luku"));
let luku2 = Number(prompt("Anna toka luku"));
let luku3 = Number(prompt("Anna kolmas luku"));

let p = document.createElement("p");
p.innerHTML = "Suurin luku: " + suurin(luku1, luku2, luku3);
document.body.appendChild(p);

function suurin(luku1, luku2, luku3) {
    let suurin = luku1;
    if(suurin < luku2){
        suurin = luku2;
    }
    if(suurin < luku3){
        suurin = luku3;
    }
    return suurin;
}