let luku = prompt("Anna luku");

let p = document.createElement("p");
p.innerHTML = "Luvun " + luku + " itseisarvo: " + itseisarvo(luku);
document.body.appendChild(p);

function itseisarvo(luku) {
    return Math.abs(luku);
}