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

let uusi = parilliset(luvut);
let ul = document.createElement("ul");
document.body.appendChild(ul);

for(let i = 0; i < uusi.length; i++){
    let li = document.createElement("li");
    li.innerHTML = uusi[i];
    ul.appendChild(li);
}

function parilliset(luvut) {
    let uusi = [];
    let j = 0;
    for(let i = 0; i < luvut.length; i++){
        if(luvut[i] % 2 === 0){
            uusi[j] = luvut[i];
            j++;
        }
    }
    return uusi;
}