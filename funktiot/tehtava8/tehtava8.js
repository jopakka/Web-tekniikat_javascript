function fibonacci() {
    let monesko = prompt("Monesko Fibonaccin lukujonon luku näytetään?");
    let luku = 1;
    let vanha1 = 0;
    let vanha2 = 1;

    for(let i = 1; i < monesko; i++){
        luku = vanha1 + vanha2;
        vanha1 = vanha2;
        vanha2 = luku;
    }

    let p = document.createElement("p");
    p.innerHTML = monesko + ". Fibonaccin luku on " + luku;
    document.body.appendChild(p);
}