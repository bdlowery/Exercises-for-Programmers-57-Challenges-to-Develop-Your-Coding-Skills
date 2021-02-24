const madLibCreator = () => {
  let getNoun = document.querySelector('.noun').value;
  let getVerb = document.querySelector('.verb').value;
  let getAdjective = document.querySelector('.adjective').value;
  let getAdverb = document.querySelector('.adverb').value;
  let getOutput = document.querySelector('.output');
  

  getOutput.textContent = `Do you ${getVerb} your ${getAdjective} ${getNoun} ${getAdverb}? That's cringe.`;


}