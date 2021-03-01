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

let orderAmount = parseFloat(document.querySelector('.order-amount').value);
let stateValue = document.querySelector('.state-value').value;
let output = document.querySelector('.output');

let wisconsonFull = "wisconson"
let wisconsonAbbv = "wi"
let illinoisFull = "illinois"
let illinoisAbbv = "il"

const calcSalesTax = function() {


  
}