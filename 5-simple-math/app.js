const mathOperations = () => {
  // let additionNum = 0;
  // let subtractionNum = 0;
  // let multiplcationNum = 0;
  // let divisonNum = 0;
  let firstNum = document.querySelector(".first-number").value;
  let secondNum = document.querySelector(".second-number").value;
  let outputValue = document.querySelector(".output");

  outputValue.setAttribute('style', 'white-space: pre-line')

  let firstNumInt = parseInt(firstNum);
let secondNumInt = parseInt(secondNum);

  if (isNaN(firstNumInt) === false && isNaN(secondNumInt) === false) {
    if (firstNumInt >= 0 && secondNumInt >= 0) {
      var additionNum = firstNumInt + secondNumInt;
      var subtractionNum = firstNumInt - secondNumInt;
      var multiplicationNum = firstNumInt * secondNumInt;
      var divisionNum = firstNumInt / secondNumInt;

      outputValue.textContent = `${firstNumInt} + ${secondNumInt} = ${additionNum} 
      \r\n ${firstNumInt} - ${secondNumInt} = ${subtractionNum} 
      \r\n ${firstNumInt} * ${secondNumInt} = ${multiplicationNum} 
      \r\n ${firstNumInt} / ${secondNumInt} = ${divisionNum}`;
    } else {
      outputValue.textContent = 'positive numbers only.'
    }
  } else {
    outputValue.textContent = 'numbers only.'
  }

};
