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

    if(bmiTotal >= 18.5 && bmiTotal <= 25) {
      output.textContent = `Your BMI is ${bmiTotal.toFixed(1)}. You are within the ideal 
      weight range.`
    } else if (bmiTotal < 18.5) {
      output.textContent = `Your BMI is ${bmiTotal.toFixed(2)}, you are underweight. Go see a doctor.`
    } else if (bmiTotal > 25) {
      output.textContent = `Your BMI is ${bmiTotal.toFixed(2)}, you are overweight. Go see a doctor.`
    }
  } else {
    output.textContent = `Numbers only.`
  }
};
