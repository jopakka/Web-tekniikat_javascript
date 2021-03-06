const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

let ul = document.body.getElementsByTagName("ul")[0];

for(let i = 0; i < pics.length; i++){
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = pics[i].thumb;
  img.addEventListener("click", () => showBigPic(i));
  li.appendChild(img);
  ul.appendChild(li);
}

function showBigPic(i) {
  console.log("showBigPic");
  let div = document.body.getElementsByTagName("div")[0];
  let img = div.getElementsByTagName("img")[0];
  img.src = pics[i].big;
  img.addEventListener("click", hideBigPic);
  div.className = "visible";
}

function hideBigPic() {
  console.log("hideBigPic");
  let div = document.getElementsByClassName("visible")[0];
  div.className = "hidden";
}