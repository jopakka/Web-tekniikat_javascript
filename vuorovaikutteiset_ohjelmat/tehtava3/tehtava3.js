function askCircle() {
    let sade = prompt('Mikä on ympyrän säde?', '5');
    let pinta = Number(sade) * 2 * Math.PI;
    alert('Ympyrän pinta-ala on ' + pinta);
}