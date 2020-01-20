let gallonat = prompt("Kuinka paljon bensaa gallonoina?");

let p = document.createElement("p");
p.innerHTML = "Bensamäärä litroina: " + muunnos(gallonat);
document.body.appendChild(p);

function muunnos(gallonat) {
    return gallonat * 3.785;
}