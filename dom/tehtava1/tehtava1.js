//Muokkaa teht1.js tiedostoa ja tee skripti joka korvaa listassa olevat tiedot omillasi.
let etunimi = document.body.getElementsByTagName("td")[0];
let sukunimi = document.body.getElementsByTagName("td")[1];
let nikki = document.body.getElementsByTagName("td")[2];
let osoite = document.body.getElementsByTagName("td")[3];
sukunimi.innerHTML = "Joonas";
etunimi.innerHTML = "Niemi";
nikki.innerHTML = "Jones";
osoite.innerHTML = "Landekuja 15, Espoo";

//Lisää JavaScriptillä listaan puhelinnumero
let tr = document.getElementsByTagName("tr")[0];
let th = document.createElement("th");
th.innerHTML = "Puhelinnumero";
tr.appendChild(th);

//Voit lisätä myös otsikon <th> -elementillä
let tr2 = document.getElementsByTagName("tr")[1];
let td2 = document.createElement("td");
td2.innerHTML = "04012345678";
tr2.appendChild(td2);

//Poista JavaScriptillä nikki
let tr3 = document.getElementsByTagName("tr")[1];
tr3.getElementsByTagName("td")[2].remove();

//Voit poistaa myös otsikon
let tr4 = document.getElementsByTagName("tr")[0];
tr4.getElementsByTagName("th")[2].remove();