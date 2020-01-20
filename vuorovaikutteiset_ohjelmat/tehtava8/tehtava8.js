function printNoppa() {
    let noppa1 = Math.floor(Math.random() * 6) + 1;
    let noppa2 = Math.floor(Math.random() * 6) + 1;
    alert("Noppa 1: " + noppa1 +
        "\nNoppa 2: " + noppa2 +
        "\nNoppien silmälukujen summa: " + (Number(noppa1) + Number(noppa2)));
}