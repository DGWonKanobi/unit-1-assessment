// function updateCounters() {
//     const inputValue = parseFloat(document.getElementById('inputValue').value);
//     const plusCounter = document.querySelector('.counter.plus');
//     const minusCounter = document.querySelector('.counter.minus');
//     const resultBox = inputValue 
  
// //     if (!isNaN(inputValue)) {
// //       plusCounter.textContent = parseFloat(plusCounter.textContent) + inputValue;
// //       minusCounter.textContent = parseFloat(minusCounter.textContent) - inputValue;
// //     }
// //     document.getElementById('inputValue').value = ''; // Clear the input field
//   }
let btnAdd = document.querySelector('.plus');
let btnSubtract = document.querySelector('.minus');
let input = document.querySelector('input');
btnAdd.addEventListener('click', () => {
  input.value = parseInt(input.value) + 1;
});
btnSubtract.addEventListener('click', () => {
  input.value = parseInt(input.value) - 1;
});



