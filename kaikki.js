function folders() {
    let myUrl = "https://raw.githubusercontent.com/jopakka/Web-tekniikat_javascript/master/tehtavat.json";

    fetch(myUrl)
        .then(function(vastaus){
            return vastaus.json();
        }).then(function(json){
        links(json);
    }).catch(function(error){
        console.log(error);
    });
}

function links(myJson) {
    let lu = document.createElement("ul");
    document.body.appendChild(lu);

    for(let i = 0; i < Object.keys(myJson).length; i++){
        console.log(Object.keys(myJson)[i]);

        let li = document.createElement("li");
        li.innerHTML = "<a href='" + Object.keys(myJson)[i] + "'>" + Object.keys(myJson)[i] +  "</a>";
        lu.appendChild(li);
    }
}

function subLinks() {

}