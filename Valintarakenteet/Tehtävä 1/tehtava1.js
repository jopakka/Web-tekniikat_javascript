function askFish(){
    let pituus = prompt("Mikä on kalan pituus?", "30");
    if(pituus < 37){
        alert("Päästä kuha takaisin järveen." +
            "\nAlimmasta sallitusta pyyntimitasta puuttuu " + (37 - pituus) + " senttiä. ");
    } else {
        alert("Voit pitää kuhan.");
    }
}
