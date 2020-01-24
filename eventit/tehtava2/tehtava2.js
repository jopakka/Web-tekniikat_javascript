let img = document.getElementById("kuva");
img.addEventListener("mouseenter", function () {
    document.body.getElementsByTagName("p")[0].className = "show";
    console.log("mouseenter");
});
img.addEventListener("mouseleave", function () {
    document.body.getElementsByTagName("p")[0].className = "";
    console.log("mouseleave");
});