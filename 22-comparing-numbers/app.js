/* eslint-disable no-unused-vars */
const compareNumbers = function () {
  let firstNumber = parseInt(document.querySelector(".first-number").value);
  let secondNumber = parseInt(document.querySelector(".second-number").value);
  let thirdNumber = parseInt(document.querySelector(".third-number").value);
  let output = document.querySelector(".output");

  //check if numbers are same, if not same display largest number. if same exit program;

  if (isNaN(firstNumber + secondNumber + thirdNumber) === false) {
    if (firstNumber != secondNumber && firstNumber != thirdNumber && secondNumber != thirdNumber) {
      if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        output.textContent = `The largest number is ${firstNumber}.`;
      } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        output.textContent = `The largest number is ${secondNumber}.`;
      } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        output.textContent = `The largest number is ${thirdNumber}.`;
      }
    } else {
      output.textContent = "Numbers cannot be the same.";
    }
  } else {
      output.textContent = "Numbers only.";
  }
};
