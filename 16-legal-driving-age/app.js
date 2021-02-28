/* eslint-disable no-unused-vars */
const compareAge = function() {
  //grab input from user.
  let age = parseInt(document.querySelector(".age").value);
  let output = document.querySelector('.output')

  //check if input from user is a number and not a negative number.
  if (isNaN(age) === false && age > 0) {
  //check to make sure the age the user input is greater or equal to 16
  if (age >= 16) {
    output.textContent = "You are old enough to legally drive."
  } else {
    output.textContent = "You need to be atleast 16 to drive. Sorry!"
  }
  } else {
    output.textContent = "Enter a valid number."
  }

}