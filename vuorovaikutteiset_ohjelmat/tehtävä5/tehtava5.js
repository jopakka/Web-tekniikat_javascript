function askNumbers() {
    let eka = prompt('Mikä on eka kokonaisluku?', '5');
    let toka = prompt('Mikä on toka kokonaisluku?', '5');
    let kolmas = prompt('Mikä on kolmas kokonaisluku?', '5');
    let summa = Number(eka) + Number(toka) + Number(kolmas);
    let tulo = Number(eka) * Number(toka) * Number(kolmas);
    let keskiarvo = (Number(eka) + Number(toka) + Number(kolmas)) / 3;
    alert('Lukujen summa on ' + summa);
    alert('Lukujen tulo on ' + tulo);
    alert('Lukujen keskiarvo on ' + keskiarvo);
}