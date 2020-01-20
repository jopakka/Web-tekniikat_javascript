function askValues() {
    let leiviska = prompt('Montako leiviskää?', '5');
    let naula = prompt('Montako naulaa?', '5');
    let luoti = prompt('Montako luotia?', '5');
    let massa = (((Number(leiviska) * 20 + Number(naula)) * 32) + Number(luoti)) * 13.3 / 1000;
    alert('Massa nykymittojen mukaan:\n' +
        Math.floor(massa) + ' kilogrammaa ja ' +
        (Number(massa) % Math.floor(massa) * 1000).toFixed(2) + ' grammaa.');
}