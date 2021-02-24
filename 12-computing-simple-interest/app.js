/* eslint-disable no-unused-vars */
const calcInterest = () => {
  let principalAmount = parseFloat(document.querySelector(".principal-amount").value);
  let rateOfInterest = parseFloat(document.querySelector(".rate-of-interest").value);
  let numberYears = parseFloat(document.querySelector(".number-years").value);

  let output = document.querySelector(".output");

  let ratePercentage;
  let finalAmount;
  let displayPercentage;

  //check if number. if the value is not a number then isNaN will === true, and this will not be run.
  if ((isNaN(principalAmount) || isNaN(rateOfInterest) || isNaN(numberYears)) === false) {

    //user enters rate as a percent, need to turn into decimal so it can be calculated.
    ratePercentage = rateOfInterest / 100;

    //return the value as a percentage.
    displayPercentage = ratePercentage.toFixed(1) * 100;

    //fix the ratePercentage to 2 decimal places.
    ratePercentage = ratePercentage.toFixed(2);

    // equation to calculate the final amount of money.
    finalAmount = principalAmount.toFixed(2) * (1 + ratePercentage * numberYears.toFixed(0));

    //round the final mount to the nearest dollar.
    finalAmount = Math.ceil(finalAmount);

    output.textContent = `After ${numberYears} years at ${displayPercentage}%, the investment will be worth $${finalAmount}`
  } else {
    output.textContent = "Enter numbers only."
  }



};
