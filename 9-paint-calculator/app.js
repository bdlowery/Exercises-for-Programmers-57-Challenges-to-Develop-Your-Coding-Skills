/* eslint-disable no-unused-vars */
const calcGallons = () => {
  let output = document.querySelector(".output-content");
  output.setAttribute("style", "white-space: pre-line");

  let lengthCeiling = parseInt(document.querySelector(".length-ceiling").value);
  let widthCeiling = parseInt(document.querySelector(".width-ceiling").value);

  let areaCeiling;
  let gallons = 350;
  let gallonsNeeded;

  //Check if numbers.
  if (isNaN(lengthCeiling) === false && isNaN(widthCeiling) === false) {
    areaCeiling = lengthCeiling * widthCeiling;
    gallonsNeeded = areaCeiling / gallons;

    output.textContent = `You will need to purchase ${Math.ceil(gallonsNeeded)} gallons of \r\n
                          paint to cover ${areaCeiling} square feet`;

    if (Math.ceil(gallonsNeeded) === 1) {
      output.textContent = `You will need to purchase ${Math.ceil(gallonsNeeded)} gallon of \r\n
                              paint to cover ${areaCeiling} square feet`;
    }
  } else {
    output.textContent = "numbers only.";
  }
};
