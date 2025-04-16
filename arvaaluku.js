let numero = Math.floor(Math.random()*100);
const inputElem = document.getElementById('input');
const messageElem = document.getElementById('viesti');
const buttonElem = document.getElementById('painike');
const arvauksetElem = document.getElementById('arvaukset');
const counterElem = document.getElementById('counter');
let counter = 0;


document.getElementById('reset').addEventListener('click', () => {
    numero = Math.floor(Math.random()*100);
    console.log(`Uusi numero on ${numero}`);
    inputElem.value = '';
    messageElem.textContent = '';
    arvauksetElem.textContent = '';
    counterElem.textContent = 'Arvaus: 0';
    counter = 0;
});

inputElem.addEventListener('keypress', (event) => {
    console.log(event);
    if (event.key == 'Enter') {
        buttonElem.click();
    }
});

// inputElem.addEventListener('keydown', (event) => {
//     console.log(event);
//     if ((! '0123456789'.includes(event.key)) && event.key != 'Backspace')
//         event.preventDefault();
// });

buttonElem.addEventListener('click', () => {
    if (inputElem.value === '') {
        messageElem.textContent = 'Syötä numero input kenttään!';
        return
    }
    
    counter++;
    counterElem.textContent = 'Arvaus: ' + counter;

    let userNumber = Number(inputElem.value);
    inputElem.value = '';

    if (userNumber > numero) {
        messageElem.textContent = 'Liian iso';
    } else if (userNumber < numero) {
        messageElem.textContent = 'Liian pieni';
    } else {
        messageElem.textContent = 'Kyllä tuo oli se numero.';
        arvauksetElem.textContent = '';
        counterElem.textContent = '';
        return
    }

    let elem = `<span class="${userNumber>numero?'red':'blue'}">${userNumber}</span>`;

    if (arvauksetElem.textContent == '') {
        arvauksetElem.innerHTML = elem;
    } else {
        arvauksetElem.innerHTML += ', ' + elem;
    }
});
