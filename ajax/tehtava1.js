function searchPrograms() {
    console.log("searchPrograms");
    let url = "http://api.tvmaze.com/search/shows?q=";
    let haettava = document.getElementById("hakuteksti").value;
    console.log(haettava);

    fetch(url + haettava)
        .then(function (vastaus) {
            return vastaus.json();
        }).then((json) => showPrograms(json))
        .catch((error) => console.log(error));
}

function showPrograms(json) {
    console.log("showPrograms");
    console.log(json);

    document.getElementById("results").innerHTML = "";
    if(json.length === 0){
        let h2 = document.createElement("h2");
        h2.innerHTML = "No results";
        document.getElementById("results").appendChild(h2);
    }

    for(let i = 0; i < json.length; i++){
        let div = document.createElement("div");
        div.className = "program";
        document.getElementById("results").appendChild(div);

        let imgDiv = document.createElement("div");
        imgDiv.className = "imgDiv";
        div.appendChild(imgDiv);
        let img = document.createElement("img");
        if(json[i].show.image === null){
            img.src = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
        } else {
            img.src = json[i].show.image.medium;
        }
        img.alt = "Preview image";
        imgDiv.appendChild(img);

        let innerDiv = document.createElement("div");
        innerDiv.className = "programContent";
        div.appendChild(innerDiv);

        let h2 = document.createElement("h2");
        if(json[i].show.name === null){
            h2.innerHTML = "Tietoja ei saatavilla";
        } else {
            h2.innerHTML = json[i].show.name;
        }
        innerDiv.appendChild(h2);

        let table = document.createElement("table");
        innerDiv.appendChild(table);
        let tr = document.createElement("tr");
        table.appendChild(tr);

        let th = document.createElement("th");
        th.innerHTML = "Summary";
        tr.appendChild(th);
        let td = document.createElement("td");
        if(json[i].show.summary === null){
            td.innerHTML = "Not available";
        } else {
            td.innerHTML = json[i].show.summary;
        }
        tr.appendChild(td);

        tr = document.createElement("tr");
        table.appendChild(tr);
        th = document.createElement("th");
        th.innerHTML = "Homepage";
        tr.appendChild(th);
        td = document.createElement("td");
        if(json[i].show.officialSite === null){
            td.innerHTML = "Not available";
        } else {
            let a = document.createElement("a");
            a.target = "_blank";
            a.href = json[i].show.officialSite;
            a.innerHTML = json[i].show.officialSite;
            td.appendChild(a);
        }
        tr.appendChild(td);

        tr = document.createElement("tr");
        table.appendChild(tr);
        th = document.createElement("th");
        th.innerHTML = "Genres";
        tr.appendChild(th);
        td = document.createElement("td");
        if(json[i].show.genres === null || json[i].show.genres.length === 0){
            td.innerHTML = "Not available";
        } else {
            for(let i = 0; i < json[i].show.genres.length; i++){
                if(i === json[i].show.genres.length - 1){
                    td.innerHTML += json[i].show.genres[i];
                } else {
                    td.innerHTML += json[i].show.genres[i] + ", ";
                }
            }
        }
        tr.appendChild(td);
    }
}