const addQuotes = () => {
  let inputText = document.querySelector('.input-text').value;
  let speakerOfText = document.querySelector('.speaker-of-text').value;
  let outputText = document.querySelector('.output-text');

  outputText.textContent = speakerOfText + " says, \"" + inputText + "\"";
};
