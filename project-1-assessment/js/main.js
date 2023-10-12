function updateCounters() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const plusCounter = document.querySelector('.counter.plus');
    const minusCounter = document.querySelector('.counter.minus');
  
    if (!isNaN(inputValue)) {
      plusCounter.textContent = parseFloat(plusCounter.textContent) + inputValue;
      minusCounter.textContent = parseFloat(minusCounter.textContent) - inputValue;
    }
    document.getElementById('inputValue').value = ''; // Clear the input field
  }