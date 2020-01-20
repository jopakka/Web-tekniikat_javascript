function folders() {
    let myUrl = "https://raw.githubusercontent.com/jopakka/Web-tekniikat_javascript/master/tehtavat.json?token=AGNGJDS65ET7NDZTUXBGC4K6EVUMK";

    fetch(myUrl)
        .then(function(vastaus){
            return vastaus.json();
        }).then(function(json){
        naytaKuva(json);
    }).catch(function(error){
        console.log(error);
    });
}

function naytaKuva(vuorovaikuttteiset) {
    let x = vuorovaikuttteiset[0];
    console.log(x);
}