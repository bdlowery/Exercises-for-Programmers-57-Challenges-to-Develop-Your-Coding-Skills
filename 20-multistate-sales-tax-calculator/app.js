/* eslint-disable no-unused-vars */

//enter order amount, then enter state where to ship order


//if wisconson
//change display of county-selector to visible
  //if select eau clair county taxrate == 0.005
    //else if dunn county taxrate == 0.004


//if illinois
//change display of county selector to none;
//taxrate == 8% or 0.08
//display output

//every other state = no sales tax

//display tax and total for wisconson and illinois residents

//display total for everyone else.

const calcSalesTax = function() {
  let orderAmount = parseFloat(document.querySelector('.order-amount').value);
  let stateValue = document.querySelector('.state-value').value.toLowerCase();
  let output = document.querySelector('.output');

  let tax;
  let subTotal;
  let text;

  let countySelector = document.querySelector('.county-selector');
  let countySelectDisplay = document.querySelector('.county-select-display');
  
  let wisconsonFull = "wisconson";
  let wisconsonAbbv = "wi";
  let illinoisFull = "illinois";
  let illinoisAbbv = "il";


  if (isNaN(orderAmount) === false && stateValue.length > 0) {
    if(stateValue == wisconsonFull || stateValue == wisconsonAbbv) {
      countySelector.style.visibility = "visible";
      countySelectDisplay.style.visibility = "visible";

      countySelectDisplay.style.margin = "10px 0 0 0";
      countySelector.style.margin = "10px 0 0 0";
      
      if(countySelector.value === "Dunn County") {
        tax = 0.005 * orderAmount;
        subTotal = tax + orderAmount;
      } else if(countySelector.value === "Eau County") {
          tax = 0.004 * orderAmount;
          subTotal = tax + orderAmount;

      }

    }  else if(stateValue == illinoisFull || stateValue == illinoisAbbv) {
      countySelector.style.visibility = "hidden";
      countySelectDisplay.style.visibility = "hidden";

      tax = 0.08 * orderAmount;
      subTotal = tax + orderAmount;

    } else {
      countySelector.style.visibility = "hidden";
      countySelectDisplay.style.visibility = "hidden";
      tax = 0;
      subTotal = orderAmount;
    }

    if(countySelector.value === "select") {
      output.textContent = "Select your county please!"
    } else {
      output.textContent = `The tax is $${tax}. The total is $${subTotal}` }

  } else {
    output.textContent = "You need to enter an order amount (numbers only), or enter your state"
  }
}