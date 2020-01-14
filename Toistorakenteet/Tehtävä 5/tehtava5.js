function alkuluku() {
    let luku = -1;

    while(luku < 0 || luku !== Math.floor(luku)){
        luku = Number(prompt("Anna positiivinen kokonaisluku"));
    }

    let p = document.createElement("p");

    if(luku === 0 || luku === 1){
        p.innerHTML = "Luku " + luku + " ei ole alkuluku.";
    } else{
        p.innerHTML = "Luku " + luku + " on alkuluku.";
        for(let i = 2; i < luku; i++){
            console.log("For loop " + i);
            if(luku % i === 0){
                p.innerHTML = "Luku " + luku + " ei ole alkuluku.";
                break;
            }
        }
    }

    document.body.appendChild(p);
}