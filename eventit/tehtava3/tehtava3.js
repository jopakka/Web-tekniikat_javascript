let buttonSum = document.getElementById("sum");
let buttonSub = document.getElementById("sub");
let buttonMulti = document.getElementById("multi");
let buttonDiv = document.getElementById("div");
let buttonCalc = document.getElementById("calc");
let select = document.getElementById("selectMenu");
let calcText = document.getElementById("calcText");

let ans = document.getElementById("vastaus");
let ans2 = document.getElementById("vastaus2");
let ans3 = document.getElementById("vastaus3");
let luku1, luku2;

buttonSum.addEventListener("click", function () {
    getValues();
    ans.innerHTML = sum(luku1, luku2);
});
buttonSub.addEventListener("click", function () {
    getValues();
    ans.innerHTML = sub(luku1, luku2);
});
buttonMulti.addEventListener("click", function () {
    getValues();
    ans.innerHTML = multi(luku1, luku2)
});
buttonDiv.addEventListener("click", function () {
    getValues();
    ans.innerHTML = div(luku1, luku2);
});

buttonCalc.addEventListener("click", calcTextField);
select.addEventListener("change", selectCalculation);

function calcTextField() {
    console.log(calcText.value);
    if(calcText.value.includes("+")){
        let numbers = calcText.value.split("+");
        ans3.innerHTML = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    } else if(calcText.value.includes("-")){
        let numbers = calcText.value.split("-");
        ans3.innerHTML = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    } else if(calcText.value.includes("*")){
        let numbers = calcText.value.split("*");
        ans3.innerHTML = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    } else if(calcText.value.includes("/")){
        let numbers = calcText.value.split("/");
        ans3.innerHTML = parseFloat(numbers[0]) / parseFloat(numbers[1]);
    }
    console.log(numbers);
}

function getValues() {
    luku1 = parseFloat(document.getElementById("num1").value);
    luku2 = parseFloat(document.getElementById("num2").value);
}

function selectCalculation(evt) {
    getValues();
    if(evt.target.value === "sum"){
        ans2.innerHTML = luku1 + luku2;
    } else if(evt.target.value === "sub"){
        ans2.innerHTML = luku1 - luku2;
    } else if(evt.target.value === "multi"){
        ans2.innerHTML = luku1 * luku2;
    } else if(evt.target.value === "div"){
        ans2.innerHTML = luku1 / luku2;
    }
}

function sum(arvo1, arvo2) {
    return arvo1 + arvo2;
}

function sub(arvo1, arvo2) {
    return arvo1 - arvo2;
}

function multi(arvo1, arvo2) {
    return arvo1 * arvo2;
}

function div(arvo1, arvo2) {
    return arvo1 / arvo2;
}