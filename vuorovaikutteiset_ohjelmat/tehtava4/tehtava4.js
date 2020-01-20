function askSquare() {
    let kanta = prompt('Mikä on suorakulmion kanta?', '5');
    let korkeus = prompt('Mikä on suorakulmion korkeus?', '5');
    let pinta = Number(kanta) * Number(korkeus);
    let piiri = Number(kanta) * 2 + Number(korkeus) * 2;
    alert('Suorakulmion pinta-ala on ' + pinta);
    alert('Suorakulmion piiri on ' + piiri);
}