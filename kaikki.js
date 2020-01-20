function folders() {
    let myUrl = "https://raw.githubusercontent.com/jopakka/Web-tekniikat_javascript/master/tehtavat.json";

    fetch(myUrl)
        .then(function(vastaus){
            return vastaus.json();
        }).then(function(json){
        linkit(json);
    }).catch(function(error){
        console.log(error);
    });
}

function linkit(myJson) {
    console.log(myJson.vuorovaikutteiset.t1);
}