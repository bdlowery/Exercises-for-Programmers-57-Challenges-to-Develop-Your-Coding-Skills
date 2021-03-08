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


  if(action == "yes") {
    decisionYes.style.display = "";
  }
  if(action == "yes yes1") {
    displayYesYes1.style.display = "";
   } else if(action =="yes no1") {
     displayYesNo1.style.display = "";
   }

   if(action == "no") {
     decisionNo.style.display = "";
   }
   if(action == "no yes1") {
     displayNoYes1.style.display = "";
   } else if(action == "no no1") {
     displayNoNo1.style.display = "";
   }
   if(action == "no yes2") {
    displayNoYes2.style.display = "";
   } else if(action == "no no2") {
     displayNoNo2.style.display = "";
   }
   if(action == "no yes3") {
     displayNoYes3.style.display = "";
   }
   if(action == "no yes4") {
     displayNoYes4.style.display = "";
   } else if(action == "no no3") {
     displayNoNo3.style.display = "";
   }

   if(action == "reload") {
     window.location.reload();
   }
};
