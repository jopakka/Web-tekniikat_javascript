function askMoney(){
    let rahat = prompt("Paljonko sinulla on rahaa:", "50");
    let lippu = prompt("Paljonko bussilippu maksaa:", "2.5");

    if(rahat >= lippu){
        rahat -= lippu;
        alert("Hyvää matkaa!");
    } else {
        alert("Sinulla ei ole varaa lippuun.");
    }
    alert("Rahaa jäljellä: " + rahat);
}
