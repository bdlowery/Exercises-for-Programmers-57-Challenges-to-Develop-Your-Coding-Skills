/* eslint-disable no-unused-vars */
let anagramSubmitButton = document.querySelector(".anagram-submit-button");
let firstString = document.querySelector(".first-string");
let secondString = document.querySelector(".second-string");
let results = document.querySelector(".results");

anagramSubmitButton.addEventListener("click", function () {
  let firstStringValue = firstString.value;
  let secondStringValue = secondString.value;
  results.classList.toggle('clicked');
  isAnagram(firstStringValue, secondStringValue);
});

const isAnagram = function (string1, string2) {
  let splitString1 = string1.toLowerCase().split("").sort().join("");
  let splitString2 = string2.toLowerCase().split("").sort().join("");
  if (string1.length === string2.length && splitString1 === splitString2) {
    results.textContent = `"${string1}" and "${string2}" are anagrams 👍`;
  }

  if (string1.length !== string2.length) {
    results.textContent = `"${string1}" and "${string2}" are not anagrams 😡`;
  }
};
