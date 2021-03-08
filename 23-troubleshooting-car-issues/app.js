/* eslint-disable no-unused-vars */
//display the default p element with a yes or no button.
//depending on the button the user clicks
//it will display a different p element.

//one approach is to have all of the elements on the page already but visibility none
//then when the corresponding button to turn it on is clicked change the visibility.

const buttonClick = function (action) {
  let originalButtonYes = document.querySelector(".btn-original-yes");
  let originalButtonNo = document.querySelector(".btn-original-no");

  let decisionYes = document.querySelector(".yes");
  let decisionButtonYes1 = document.querySelector(".btn-yes--yes1");
  let decisionButtonNo1 = document.querySelector(".btn-yes--no1");
  let displayYesYes1 = document.querySelector(".yes--yes1");
  let displayYesNo1 = document.querySelector(".yes--no1");

  let decisionNo = document.querySelector(".no");
  let decisionButtonNoYes1 = document.querySelector(".btn-no--yes1");
  let decisionButtonNoNo1 = document.querySelector(".btn-no--no1");
  let displayNoYes1 = document.querySelector(".no--yes1");
  let displayNoNo1 = document.querySelector(".no--no1");

  let decisionButtonNoYes2 = document.querySelector(".btn-no--yes2");
  let decisionButtonNoNo2 = document.querySelector(".btn-no--no2");
  let displayNoYes2 = document.querySelector(".no--yes2");
  let displayNoNo2 = document.querySelector(".no--no2");

  let decisionButtonNoYes3 = document.querySelector(".btn-no--yes3");
  let displayNoYes3 = document.querySelector(".no--yes3");
  let decisionButtonNoYes4 = document.querySelector(".btn-no--yes4");
  let decisionButtonNoNo3 = document.querySelector(".btn-no--no3");

  let displayNoNo3 = document.querySelector(".no--no3");
  let displayNoYes4 = document.querySelector(".no--yes4");


  //check if first yes button is clicked, 
  //if it's pressed the next question will be unhidden, and the no button will be hidden.
  if(action == "yes") {
    decisionYes.style.display = "";
    originalButtonNo.style.display = "none";
  }
  //check is the first yes button down the "yes" chain is clicked. If it is, display the next question
  //while also hiding the no button.
  if(action == "yes yes1") {
    displayYesYes1.style.display = "";
    decisionButtonNo1.style.display = "none";

    //if the no button is clicked down the the first "yes" chain, display the next question
    //while also hiding the yes button.
   } else if(action =="yes no1") {
     displayYesNo1.style.display = "";
     decisionButtonYes1.style.display = "none"
   }

   //For the first question, if the no button is clicked, enter in the "no chain",
   //and display the next question while hiding the yes button.
   if(action == "no") {
     decisionNo.style.display = "";
     originalButtonYes.style.display = "none";
   }

   //if the first yes button is clicked down the "no chain",
   //display the next question and hide the no button.
   if(action == "no yes1") {
     displayNoYes1.style.display = "";
     decisionButtonNoNo1.style.display = "none";

    //if the first no button is clicked down the "no chain",
    //display the next question and hide the yes button.
   } else if(action == "no no1") {
    decisionButtonNoYes1.style.display = "none";
     displayNoNo1.style.display = "";
   }

   //if the second yes button is clicked down the "no chain",
   //display the next question and hide the no button.
   if(action == "no yes2") {
    displayNoYes2.style.display = "";
    decisionButtonNoNo2.style.display = "none";

    //if the second no button is clicked down the "no chain",
    //display the next question and hide the yes button.
   } else if(action == "no no2") {
     displayNoNo2.style.display = "";
     decisionButtonNoYes2.style.display = "none";

   }
   //there is only one correct answer for this question in the "no chain",
   //when the user clicks the yes button display the next question.
   //No buttons are being hidden here as there is only one button to click.
   if(action == "no yes3") {
     displayNoYes3.style.display = "";

   }

   //if the fourth yes button down the "no chain" is clicked,
   //display the next question and hide the no button.
   if(action == "no yes4") {
     displayNoYes4.style.display = "";
     decisionButtonNoNo3.style.display = "none";

    //if the third no button down the "no chain" is clicked,
    //display the end result for the answer to this question while also hiding the yes button.
   } else if(action == "no no3") {
     displayNoNo3.style.display = "";
     decisionButtonNoYes4.style.display = "none";
   }

   //Whenever the user reaches the end of a question tree 
   //a button will pop up prompting the user to "start over" so they don't have to manually refresh.
   if(action == "reload") {
     window.location.reload();
   }
};
