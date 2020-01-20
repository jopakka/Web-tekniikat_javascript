function folders() {
    let myUrl = require("tehtavat");
    /*
    let myUrl = "https://raw.githubusercontent.com/jopakka/Web-tekniikat_javascript/master/tehtavat.json";

    fetch(myUrl)
        .then(function(vastaus){
            return vastaus.json();
        }).then(function(json){
        linkit(json);
    }).catch(function(error){
        console.log(error);
    });
    */
}

function linkit(vuorovaikutteiset) {
    let x = vuorovaikutteiset[1];
    console.log(x.vuorovaikutteiset);
}