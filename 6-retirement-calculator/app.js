const calcRetirement = () => {
  let currentAge = parseInt(document.querySelector(".age-input").value);
  let retirementAge = parseInt(document.querySelector(".retire-age").value);
  let output = document.querySelector(".output");
  output.setAttribute('style', 'white-space: pre-line;')
  let calcRetirementAge;
  let retirementYear;

  let today = new Date();
  let year = today.getFullYear();

  if (isNaN(currentAge) === false && isNaN(retirementAge) === false) {
    if (retirementAge > currentAge) {
      calcRetirementAge = retirementAge - currentAge;
      retirementYear = calcRetirementAge + year;


      output.textContent = `What is your current Age? ${currentAge} \r\n 
      At what age would you like to retire? ${retirementAge} \r\n
      You have ${calcRetirementAge} years left until you can retire. \r\n
      It's ${year}, so you can retire in ${retirementYear}. `

    } else {
      output.textContent = "You can already retire."
    }
  } else {
    output.textContent = "Numbers only."
  }
};
