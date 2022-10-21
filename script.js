const poundInput = document.querySelector('#pound-input');
const submitButton = document.querySelector('button');
const dollarOutput = document.querySelector('p');
submitButton.addEventListener('click', () => {

const poundValue = poundInput.value;
poundInput.value = '';

const conversionValue = poundValue * 1.12;


dollarOutput.textContent = `You have  💲${conversionValue.toFixed(2)}`;

poundInput.focus();

});
