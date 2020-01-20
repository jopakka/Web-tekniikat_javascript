function samaLuku() {
    let luvut = [];
    let luku = 0;

    let i = 0;
    while(!luvut.includes(luku)){
        luku = prompt("Anna luku");
        if(!luvut.includes(luku)){
            luvut[i] = luku;
            luku = "";
            i++;
        }
    }

    let p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML = "Annoit jo saman luvun.";
}