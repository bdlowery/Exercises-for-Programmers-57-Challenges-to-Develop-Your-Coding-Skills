/* eslint-disable no-unused-vars */
const tempCalc = function() {

  let userTemp = parseInt(document.querySelector('.user-temperature').value);
  let userUnits = document.querySelector('.user-unit').value.toLowerCase();
  let output = document.querySelector('.output');

  let celsius = "c";
  let fahrenheit = "f";

  let celsiusConversion;
  let fahrenheitConversion;

  //make sure userTemp is a number.
  //Make sure userunits is equal to either c or f.
  if (isNaN(userTemp) === false && (userUnits === "c" || userUnits === "f")){
    if (userUnits === 'f') {
      celsiusConversion = (userTemp - 32) * 5/9;

      output.textContent = `The temperature in Celsius is ${celsiusConversion.toFixed()} degrees.`

    } else if (userUnits ==='c') {
      fahrenheitConversion = (userTemp * 9/5) + 32;

      output.textContent = `The temperature in Fahrenheit is ${fahrenheitConversion.toFixed()} degrees.`
    } else {
      output.textContent = "Enter valid units."
    }
    
  } else {
    output.textContent = "The temperatue must be a number, and the units must either be C or F"
  }
}