let fibonacci = n => {
    if(n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

let monesko = prompt("Monesko Fibonaccin lukujonon luku näytetään?");

let p = document.createElement("p");
p.innerHTML = monesko + ". Fibonaccin luku on " + fibonacci(monesko);
document.body.appendChild(p);

