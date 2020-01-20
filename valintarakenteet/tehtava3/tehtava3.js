function askInfo(){
    let sukupuoli = prompt("Anna sukupuolesi (m/n):", "m");
    let hemo = prompt("Anna hemoglobiiniarvosi (g/l):", "150");

    if(sukupuoli.localeCompare("m")){
        if(hemo >= 134 && hemo <= 195){
            alert("Hemoglobiiniarvosi on normaali.");
        } else if(hemo < 134){
            alert("Hemoglobiiniarvosi on alhainen.");
        } else if(hemo > 195){
            alert("Hemoglobiiniarvosi on korkea.");
        }
    } else if(sukupuoli.localeCompare("n")) {
        if(hemo >= 117 && hemo <= 175){
            alert("Hemoglobiiniarvosi on normaali.");
        } else if(hemo < 117){
            alert("Hemoglobiiniarvosi on alhainen.");
        } else if(hemo > 175){
            alert("Hemoglobiiniarvosi on korkea.");
        }
    }
}
