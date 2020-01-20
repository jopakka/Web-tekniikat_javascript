function muunnos() {
    let gallonat = prompt("Kuinka paljon bensaa gallonoina?");

    let p = document.createElement("p");
    p.innerHTML = "Bensamäärä litroina: " + (gallonat * 3.785);
    document.body.appendChild(p);
}