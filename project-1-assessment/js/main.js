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

// let btnAdd = document.querySelector('.plus');
// let btnSubtract = document.querySelector('.minus');
// let input = document.querySelector('input');
// let resultElement = document.getElementById('result');

// btnAdd.addEventListener('click', () => {
//   input.value = parseInt(input.value) + 1;
//   updateResult();
// });

// btnSubtract.addEventListener('click', () => {
//   input.value = parseInt(input.value) - 1;
//   updateResult();
// });

// input.addEventListener('input', () => {
//   updateResult();
// });

// function updateResult() {
//   const inputValue = parseInt(input.value) || 0;
//   resultElement.textContent = inputValue + (parseInt(btnAdd.textContent) - parseInt(btnSubtract.textContent));
// }

// // Initialize result
// updateResult();

// Initialize variables to track the click count and input value
// let plusClickCount = 1;
// let minusClickCount = 1;
// let inputValue = 0; // Initial input value
// let resultValue = 0; // Initial result value




// // Function to handle plus button click
// function handlePlusButtonClick() {
//   plusClickCount++;
//   inputValue += plusClickCount;
//   updateResult();
// }

// // Function to handle minus button click
// function handleMinusButtonClick() {
//   minusClickCount++;
//   inputValue -= minusClickCount;
//   updateResult();
// }

// // Function to update the result and input value
// function updateResult() {
//   resultValue = inputValue;
//   document.getElementById('inputValue').value = inputValue;
//   document.getElementById('resultBox').textContent = resultValue;
// }

// // Add event listeners to plus and minus buttons
// document.getElementById('plusButton').addEventListener('click', handlePlusButtonClick);
// document.getElementById('minusButton').addEventListener('click', handleMinusButtonClick);
