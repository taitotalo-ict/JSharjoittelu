const input_elem = document.getElementById('text');
const p_elem = document.getElementById('tulos');
const button_elem = document.getElementsByTagName('button')[0]

button_elem.addEventListener('click', () => {
    p_elem.textContent = input_elem.value;
});