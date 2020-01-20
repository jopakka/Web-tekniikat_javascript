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
    document.getElementById("linkDiv").innerHTML = "";
    let lu = document.createElement("ul");
    document.getElementById("linkDiv").appendChild(lu);

    for(let i = 0; i < Object.keys(myJson).length; i++){
        console.log(myJson[i]);

        let li = document.createElement("li");
        li.innerHTML = "<a href='javascript:void(0);'>" + myJson[i].name +  "</a>";
        li.addEventListener("click", function() {
            subLinks(myJson[i])
        });
        lu.appendChild(li);
    }
}

function subLinks(myJson) {
    console.log("Vittu tää toimii: " + myJson.links[0]);

    document.getElementById("linkDiv").innerHTML = "";

    let ul = document.createElement("ul");
    document.getElementById("linkDiv").appendChild(ul);

    let li = document.createElement("li");
    li.innerHTML = "<a href='index.html'>" + "Takaisin" + "</a>";
    ul.appendChild(li);

    let innerUl = document.createElement("ul");
    ul.appendChild(innerUl);
    for(let i = 0; i < myJson.links.length; i++){
        let innerLi = document.createElement("li");
        innerLi.innerHTML = "<a href='" + myJson.links[i] + "'>" + "Tehtävä " + (i + 1) + "</a>";
        innerUl.appendChild(innerLi);
    }
}