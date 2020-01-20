function luvut() {
    let luku = 1;
    let luvut = [];

    let i = 0;
    while (luku != 0){
        luku = prompt("Anna luku");
        luvut[i] = luku;
        i++;
    }

    luvut.sort((a,b) => a-b);

    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    for(let i = 0; i < luvut.length; i++){
        let li = document.createElement("li");
        li.innerHTML = luvut[i];
        ul.appendChild(li);
    }
}