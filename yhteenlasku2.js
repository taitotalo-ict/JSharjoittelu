const luvutElem = document.getElementsByClassName('luku');
const tulosElem = document.getElementById('tulos');

document.getElementById('summa').addEventListener('click', () => {
    // Solution 1
    let index = 0;
    let summa = 0;
    while (index < luvutElem.length){
        summa += Number(luvutElem[index++].value);
    }
    
    // Solution 2
    summa = 0;
    for (let index=0; index < luvutElem.length; index++) {
        summa += Number(luvutElem[index].value);
    }
    
    // Solution 3
    summa = 0;
    for (element of luvutElem) {
        summa += Number(element.value)
    }    


    tulosElem.textContent = summa;
});
