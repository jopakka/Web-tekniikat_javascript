function askTili() {
    let saldo = prompt('Mikä on tilin saldo', '1000');
    let korkoprosentti = prompt('Mikä on vuotuinen korkoprosentti?', '5');
    let koronMaara = Number(saldo) * (Number(korkoprosentti) / 100);
    alert('Vuodessa kertyvä korko: ' + (Math.round(koronMaara * 100) / 100).toFixed(2) + "\n" +
        "Kasvanut saldo: " + (Math.round((Number(saldo) + Number(koronMaara)) * 100) / 100).toFixed(2));
}