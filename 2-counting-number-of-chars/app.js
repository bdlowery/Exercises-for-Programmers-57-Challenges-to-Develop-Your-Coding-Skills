var charCount = 0;

document.addEventListener("keydown", (e) => {
  if (document.querySelector(".inputString") === document.activeElement) {
    charCount++;
    document.querySelector(".output").textContent =
      "There are " + charCount + " characters in your word";
  } else {
    document.querySelector(".inputString").value = "";
    document.querySelector(".output").textContent = "";
    charCount = 0;
  }
});
// const calcChars = () => {
//   let inputString = document.querySelector(".inputString").value;
//   let inputStringLength = inputString.length;

//   document.querySelector(".output").textContent =
//     "What is the input string? " + inputString + " AND " + inputString + " has " + inputStringLength + " characters";
// };
