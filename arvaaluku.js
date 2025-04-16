let numero = Math.floor(Math.random()*100);
const inputElem = document.getElementById('input');
const messageElem = document.getElementById('viesti');
const buttonElem = document.getElementById('painike');
const arvauksetElem = document.getElementById('arvaukset');

document.getElementById('reset').addEventListener('click', () => {
    numero = Math.floor(Math.random()*100);
    console.log(`Uusi numero on ${numero}`);
    inputElem.value = '';
    messageElem.textContent = '';
    arvauksetElem.textContent = '';
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
    
    let userNumber = Number(inputElem.value);

    if (userNumber > numero) {
        messageElem.textContent = 'Liian iso';
    } else if (userNumber < numero) {
        messageElem.textContent = 'Liian pieni';
    } else {
        messageElem.textContent = 'Kyllä tuo oli se numero.';
    }

    if (arvauksetElem.textContent == '') {
        arvauksetElem.textContent = userNumber;
    } else {
        arvauksetElem.textContent += ', ' + userNumber;
    }
});
