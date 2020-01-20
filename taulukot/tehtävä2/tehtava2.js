function osallistujat() {
    let osallistujat = prompt("Kuinka monta osallistujaa?", "5");
    let nimet = [];

    for(let i = 0; i < osallistujat; i++){
        nimet[i] = prompt("Osallistujan " + (i + 1) + " nimi:");
    }

    let ol = document.createElement("ol");
    document.body.appendChild(ol);
    for(let i = 0; i < osallistujat; i++){
        let li = document.createElement("li");
        li.innerHTML = nimet[i];
        ol.appendChild(li);
    }

}