/* eslint-disable no-unused-vars */
const baCalc = function () {
  let weight = parseFloat(document.querySelector(".weight-input").value);
  let gender = document.querySelector(".gender-input").value;
  let drinksAmount = parseFloat(document.querySelector(".drinks-input").value);
  let alcoholOunces = parseFloat(document.querySelector(".ounces-input").value);
  let lastTimeDrinkConsumed = parseFloat(document.querySelector(".last-drink-time-input").value);
  let output = document.querySelector(".output");

  let genderMale = "male";
  let genderFemale = "female";

  let totalAlcoholConsumed = drinksAmount * alcoholOunces;

  console.log(typeof totalAlcoholConsumed);
  let bloodAlcoholContent;
  //prevent user from entering anything that is not a number for number inputs.
  if (!isNaN(weight + drinksAmount + alcoholOunces + lastTimeDrinkConsumed)) {
    //if male
    if (gender.toLowerCase() === genderMale) {
      //calculate for male
      bloodAlcoholContent =
        ((totalAlcoholConsumed * 5.14) / weight) * 0.73 - 0.015 * lastTimeDrinkConsumed;

      //Over legal limit
      if (bloodAlcoholContent >= 0.08) {
        output.textContent = `Your BAC is ${bloodAlcoholContent.toFixed(2)}. 
          It is not legal for you to drive.`;
      } else {
        //under legal limit
        output.textContent = `Your BAC is ${bloodAlcoholContent.toFixed(2)}.
          It is legal for you to drive.`;
      }
    } else if (gender.toLowerCase() === genderFemale) {
      //calculate for female
      bloodAlcoholContent =
        ((totalAlcoholConsumed * 5.14) / weight) * 0.66 - 0.015 * lastTimeDrinkConsumed;

      if (bloodAlcoholContent >= 0.08) {
        output.textContent = `Your BAC is ${bloodAlcoholContent.toFixed(2)}. 
        It is not legal for you to drive.`;
      } else {
        output.textContent = `Your BAC is ${bloodAlcoholContent.toFixed(2)}.
          It is legal for you to drive.`;
      }
    } else {
      output.textContent = "Invalid input. Numbers only, except for Gender field.";
    }
  }
};
