function koirat() {
    let koirat = [];

    for(let i = 0; i < 6; i++){
        koirat[i] = prompt("Koiran " + (i + 1) + "/6 nimi:");
    }

    koirat.sort().reverse();

    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    for(let i = 0; i < 6; i++){
        let li = document.createElement("li");
        li.innerHTML = koirat[i];
        ul.appendChild(li);
    }

}