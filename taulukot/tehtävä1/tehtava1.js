function viisiLukua() {
    let luvut = [];
    for(let i = 0; i < 5; i++){
        luvut[i] = prompt("Kokonaisluku " + (i + 1) + "/5");
    }
    let p = document.createElement("p");
    for(let i = 5; i > 0; i--){
        if(i !== 1){
            p.innerHTML += i + ", ";
        } else {
            p.innerHTML += i;
        }
    document.body.appendChild(p);
    }
}