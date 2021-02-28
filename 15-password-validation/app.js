/* eslint-disable no-unused-vars */
const validatePassword = function () {
  //get input from user and store in variables.

  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  let output = document.querySelector(".output");

  let passwordStored = "password";

  if (password == passwordStored) {
    output.textContent = "Welcome!";
  } else {
    output.textContent = "Wrong password!";
  }
};
