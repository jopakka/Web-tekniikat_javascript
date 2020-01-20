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
    document.getElementById("linkDiv").appendChild(lu);

    for(let i = 0; i < Object.keys(myJson).length; i++){
        myJson[0]

        let li = document.createElement("li");
        li.innerHTML = "<a href='javascript:void(0);' onclick='subLinks(" + (myJson + "." + Object.keys(myJson)[i]) + ")'>" + Object.keys(myJson)[i] +  "</a>";
        lu.appendChild(li);
    }
}

function subLinks(id) {
    console.log("Vittu tää toimii: " + id);

    for(let i = 0; i < 9; i++){

    }
}