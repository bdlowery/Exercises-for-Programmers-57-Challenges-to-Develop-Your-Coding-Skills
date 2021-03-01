/* eslint-disable no-unused-vars */
const bmiCalc = function () {
  let userHeight = parseFloat(document.querySelector(".user-height").value);
  let userWeight = parseFloat(document.querySelector(".user-weight").value);
  let output = document.querySelector(".output");

  let bmiTotal;

  //check if userHeight and userWeight are a number.
  //adding a number + a non number will = NaN,
  //so this will work to verify if either input is a number or not.
  if (isNaN(userHeight + userWeight) === false) {
    bmiTotal = (userWeight / (userHeight * userHeight)) * 703;
  }
};
