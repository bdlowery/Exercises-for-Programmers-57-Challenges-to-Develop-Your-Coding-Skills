/* eslint-disable no-unused-vars */
const compoundInterest = function () {
  //grab input from user
  let principalAmount = parseFloat(document.querySelector(".principal-amount").value);
  let interestRate = parseFloat(document.querySelector(".interest-rate").value);
  let numberYears = parseFloat(document.querySelector(".number-years").value);
  let compoundNumber = parseFloat(document.querySelector(".compound-number").value);

  //initialize variables needed for calculation
  let interestRateDecimal;
  let endAmount;
  let parenthesisCalc;
  let exponentCalc;
  let parenExpCalc
  
  //grab class calculations will be output to
  let output = document.querySelector(".output");
  //change style to allow carriage returns and newline breaks with javascript
  output.setAttribute("style", "white-space: pre-line");

  //if the input from the user is a number (isNaN will equal true if the input is not a number)
  if((isNaN(principalAmount) && isNaN(interestRate) && isNaN(numberYears) && isNaN(compoundNumber)) === false ) {
    //convert interest rate from percentage to decimal
    interestRateDecimal = interestRate / 100;

    //calculate parenthesis first
    parenthesisCalc = 1 + interestRateDecimal / compoundNumber;

    //do the exponent calculation
    exponentCalc = compoundNumber * numberYears;

    //do the parenthsis raised to the exponent calulcation
    parenExpCalc = Math.pow(parenthesisCalc, exponentCalc)
    
    //multiply the principal amount by what was just calculate from the (parenthesisCalc)^exponentCalc calculation above.
    endAmount = principalAmount * parenExpCalc;

    //output the calculated numbers into the textContent of the output class.
    output.textContent = `$${principalAmount} invested at ${interestRate}% for ${numberYears} years \r\n
    compounded $${compoundNumber} times per year is $${endAmount.toFixed(2)}`
  } else {
    output.textContent = "Numbers only."
  }


};
