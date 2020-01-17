function mediaani() {
    let luvut = [];

    let i = 0;
    while(true){
        let luku = parseInt(prompt("Anna luku. 0 lopettaa ohjelman"));
        if(luku === 0){
            break;
        }
        luvut[i] = luku;
        i++;
    }

    luvut.sort((a,b) => a-b);

    let mediaani;
    if(luvut.length % 2 === 0){
        let mid = (luvut.length - 1) / 2;
        mediaani = (luvut[Math.floor(mid)] + luvut[Math.ceil(mid)]) / 2;
    } else {
        let mid = (luvut.length - 1) / 2;
        mediaani = luvut[Math.floor(mid)];
    }

    let p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML = "Mediaani on " + mediaani;
}