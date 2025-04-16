const numero = 67;
const inputElem = document.getElementById('input');
const messageElem = document.getElementById('viesti');


document.getElementById('painike').addEventListener('click', () => {
    let userNumber = Number(inputElem.value);

    if (userNumber > numero) {
        messageElem.textContent = 'Liian iso';
    } else if (userNumber < numero) {
        messageElem.textContent = 'Liian pieni';
    } else {
        messageElem.textContent = 'Kyllä tuo oli se numero.';
    }
});
