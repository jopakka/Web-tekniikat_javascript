function karkausvuodet() {
    let eka = prompt("Anna aloitusvuosi:");
    let toka = prompt("Anna lopetusvuosi:");

    let p = document.createElement("p");
    p.innerHTML = "Karkausvuodet väliltä " + eka + "-" + toka;
    document.body.appendChild(p);

    let list = document.createElement("ul");
    document.body.appendChild(list);

    for(let i = eka; i <= toka; i++){
        if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
            let li = document.createElement("li");
            list.appendChild(li);
            li.innerHTML += i;
        }
    }
}