const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for(let i = 0; i < kuvat.length; i++){
  let html = "<li><img src='" + kuvat[i] + "')></li>";
  document.getElementsByTagName("ul")[0].innerHTML += html;
  console.log(html);
}
