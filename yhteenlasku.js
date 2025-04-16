window.addEventListener('DOMContentLoaded', () => {
    const luku1Elem = document.querySelector('#luku1');
    const luku2Elem = document.querySelector('#luku2');
    const tulosElem = document.querySelector('#tulos');
    const summaElem = document.querySelector('#summa');
    const erotusElem = document.querySelector('#erotus');
    const tuloElem = document.querySelector('#tulo');

    function checkInputField (event) {
        const inputElem = event.target;
        if (inputElem.value === '') {
            inputElem.classList.add('virhe');
        } else {
            inputElem.classList.remove('virhe');
        }

        if (luku1Elem.value !='' && luku2Elem.value != '') {
            summaElem.disabled = false;
            erotusElem.disabled = false;
            tuloElem.disabled = false;
        } else {
            summaElem.disabled = true;
            erotusElem.disabled = true;
            tuloElem.disabled = true;
        }
    }

    luku1Elem.addEventListener('input', checkInputField);
    luku2Elem.addEventListener('input', checkInputField);

    summaElem.addEventListener('click', () => {
        tulosElem.textContent = Number(luku1Elem.value) + Number(luku2Elem.value);      
    });

    erotusElem.addEventListener('click', () => {
        tulosElem.textContent = Number(luku1Elem.value) - Number(luku2Elem.value);      
    });

    tuloElem.addEventListener('click', () => {
        tulosElem.textContent = Number(luku1Elem.value) * Number(luku2Elem.value);      
    });
});
