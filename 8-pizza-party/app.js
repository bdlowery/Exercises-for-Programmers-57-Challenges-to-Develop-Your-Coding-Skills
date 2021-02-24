
const pizzaCalc = () => {
  let numPeople = parseInt(document.querySelector('.number-people').value);
  let numPizza = parseInt(document.querySelector('.number-pizzas').value);
  let outputContent = document.querySelector('.output');
  let slicesOfPizza = parseInt(document.querySelector('.slices-pizza').value);

  
  //allow for carriage returns and line breaks. \r\n will not work without this.
  outputContent.setAttribute("style", "white-space: pre-line");
  // toPrecision(1)
  let slicePerPerson;
  let totalSlicesCount;
  let leftOverPieces;


  //verifies numPeople, numPizza and slicesOfPizza are numbers.
  if(isNaN(numPeople) === false && isNaN(numPizza) === false && isNaN(slicesOfPizza) === false) {
    totalSlicesCount = (numPizza * slicesOfPizza);
    slicePerPerson = totalSlicesCount / numPeople;

    leftOverPieces = totalSlicesCount % numPeople;
    if(leftOverPieces === 0 || leftOverPieces === 2) {
      outputContent.textContent = `${numPeople} people with ${numPizza} pizzas \r\n
                                    Each person gets ${slicePerPerson.toPrecision(1)} pieces of pizza. \r\n
                                    There are ${leftOverPieces} leftover pieces`;
    } else if (leftOverPieces === 1) {
      outputContent.textContent = `${numPeople} people with ${numPizza} pizzas \r\n
      Each person gets ${slicePerPerson.toPrecision(1)} pieces of pizza. \r\n
      There is ${leftOverPieces} leftover piece`;
    } else if (numPeople === 1 && numPizza === 1) {
      outputContent.textContent = `${numPeople} person with ${numPizza} pizza \r\n
      This person gets ${slicePerPerson.toPrecision(1)} pieces of pizza. \r\n
      There is ${leftOverPieces} leftover piece`;
    } else {
      outputContent.textContent = `${numPeople} people with ${numPizza} pizzas \r\n
      Each person gets ${slicePerPerson.toPrecision(1)} pieces of pizza. \r\n
      There are ${leftOverPieces} leftover pieces`;
    }
  } else {
    outputContent.textContent = "Numbers only."
  }










}
