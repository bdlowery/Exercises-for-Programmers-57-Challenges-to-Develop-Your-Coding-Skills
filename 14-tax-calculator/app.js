/* eslint-disable no-unused-vars */
const taxCalc = function () {
  //get input from user and store in a variable
  let orderAmount = parseFloat(document.querySelector(".order-amount").value);
  let stateInput = document.querySelector(".state-input").value;

  let output = document.querySelector(".output");
  //change style to allow carriage returns and newline breaks with javascript
  output.setAttribute("style", "white-space: pre-line");

  let wisconsonTax = 5.5 / 100;

  let totalTax;
  let totalAmount;

  let stateAbrev = "wi";
  let stateFull = "wisconsin";

  //if the input from the user is the same as stateAbrev, or stateFull, regardless of case sensitivity, calculate the tax.
  if (stateInput.toLowerCase() == stateAbrev || stateInput.toLowerCase() == stateFull) {
    totalTax = orderAmount * wisconsonTax;
    totalAmount = totalTax + orderAmount;
    
    output.textContent = `The subtotal is $${orderAmount} \r\n
    The tax is $${totalTax}. \r\n
    The total is $${totalAmount}`
  } else {
    output.textContent = `The total is $${orderAmount}`

  }

};
