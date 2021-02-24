const areaCalc = () => {
  let length = parseInt(document.querySelector(".room-length").value);
  let width = parseInt(document.querySelector(".room-width").value);
  let areaFeet;
  let areaMeters;

  //get access to the dropdown selector.
  let selectUnits = document.querySelector(".unit-selector");

  //look at the dropdown menu options. (given in an array)
  //pick the option that was selected by the user, grab the value, and assign it to selectedUnitsValue
  let selectedUnitsValue = selectUnits.options[selectUnits.selectedIndex].value;

  //get access to the output paragraph class to output the data.
  let output = document.querySelector(".output");

  //allow for carriage returns and line breaks. \r\n will not work without this.
  output.setAttribute("style", "white-space: pre-line");

  //Make sure that the input values are actually numbers. Since length and width are parsed to ints, any non-numbers are converted to NaN.
  //If the length and width values equate to false when checking if they are NaN, it means the values are numbers.
  //If the values are numbers execute the code.
  if (isNaN(length) === false && isNaN(width) === false) {

    //Check if the value selected by the user in the dropdown menu is feet.
    if (selectedUnitsValue == "feet") {

      //Area of a rectangle is l * w.
      areaFeet = length * width;

      //If the area is 1, "1 feet squared" does not make sense. Change it to "1 foot squared"
      if(areaFeet == 1) {
      output.textContent = `What is the length of the room in feet? ${length} \r\n
                            What is the width of the room in feet? ${width} \r\n
                            You entered dimensions of ${length} feet by ${width} feet. \r\n
                            The area is \r\n
                            ${areaFeet} foot squared`;
      } else {
        output.textContent = `What is the length of the room in feet? ${length} \r\n
        What is the width of the room in feet? ${width} \r\n
        You entered dimensions of ${length} feet by ${width} feet. \r\n
        The area is \r\n
        ${areaFeet} feet squared`;

      }
    //Check if the value selected by the user is meters.
    } else if (selectedUnitsValue == "meters") {

      //calculate the area, then multiply by 0.09290304 to convert the area to meters.
      areaMeters = length * width * 0.09290304;
      output.textContent = `What is the length of the room in meters? ${length} \r\n
                            What is the width of the room in meters? ${width} \r\n
                            You entered dimensions of ${length} meters by ${width} meters. \r\n
                            The area is \r\n
                            ${areaMeters.toPrecision(5)} meters squared`;
    }
  } else {
    output.textContent = `Only enter numbers. \r\n
    Example: 12,210 will not work. Enter 12210 instead. \r\n
    Example: two will not work. Enter 2 instead. `
  }
};
