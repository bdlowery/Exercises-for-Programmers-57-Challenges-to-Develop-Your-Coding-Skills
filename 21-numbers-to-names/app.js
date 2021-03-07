/* eslint-disable no-unused-vars */


const buttonClick = function() {
let userNumberInput = document.querySelector('.user-number-input').value;
let output = document.querySelector('.output')

  switch (userNumberInput) {

case "1":
  output.textContent = "The name of the month is January 📅";
  break;
case "2":
  output.textContent = "The name of the month is February 📅";
  break;
case "3":
  output.textContent = "The name of the month is March 📅";
  break;
case "4":
  output.textContent = "The name of the month is April 📅";
  break;
case "5":
  output.textContent = "The name of the month is May 📅";
  break;
case "6":
  output.textContent = "The name of the month is June 📅";
  break;
case "7":
  output.textContent = "The name of the month is July 📅";
  break;
case "8":
  output.textContent = "The name of the month is August 📅";
  break;
case "9":
  output.textContent = "The name of the month is September 📅";
  break;
case "10":
  output.textContent = "The name of the month is October 📅";
  break;
case "11":
  output.textContent = "The name of the month is November 📅";
  break;
case "12":
  output.textContent = "The name of the month is December 📅";
  break;

}
}