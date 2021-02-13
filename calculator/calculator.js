window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");

  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById('loan-amount').value = '10000'
  document.getElementById('loan-years').value = '15'
  document.getElementById('loan-rate').value = '4'
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues()
  let monthly = calculateMonthlyPayment(values)
  updateMonthly(monthly)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principal = values.amount
  let years = values.years
  let rate = values.rate / 100
  let periodicRate = rate / 12
  let months = years * 12

  let monthly = ((principal * periodicRate) / (1 - (1 + periodicRate) ** -Math.abs(months))).toFixed(2);

  return monthly
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById('monthly-payment').innerText = monthly
}
