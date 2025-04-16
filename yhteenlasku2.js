const luvutElem = document.getElementsByClassName('luku');
//const luvutElem = document.querySelectorAll('.luku');
const tulosElem = document.getElementById('tulos');
//const tulosElem = document.querySelector('#tulos');

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
    
    let luvutLista = Array.from(luvutElem);

    // Solution 4
    summa = 0;
    for (index in luvutLista) {
        summa += Number(luvutElem[index].value);
    }


    tulosElem.textContent = summa;
});
