helloDisplay = () => {
  let inputName = document.getElementById("name").value;

  let outputContainer = document.querySelector("#output");

  if (inputName == "Brian") {
    outputContainer.textContent = "Hello, " + inputName + " you're cool!";
  } else if (inputName == "Christine") {
    outputContainer.textContent = "Hello, " + inputName + " I love you!";
  } else {
    outputContainer.textContent = "Hello, " + inputName + " you're not familiar";

  }
};
