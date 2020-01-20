let luvut = [];
let luku;

let i = 0;
do {
    luku = prompt("Anna lukuja. Tyhjä lopettaa");
    if(luku !== ""){
        luvut[i] = luku;
        i++;
    }
} while (luku !== "");

vastaluvut(luvut);

function vastaluvut(luvut) {
    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    for(let i = 0; i < luvut.length; i++){
        luvut[i] = luvut[i] * -1;
        let li = document.createElement("li");
        li.innerHTML = luvut[i];
        ul.appendChild(li);
    }
}
