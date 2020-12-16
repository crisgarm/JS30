"use strict";

const checkboxes = document.querySelectorAll(".input__checkbox");

//we create a variable that stores which element was checked (this)
let lastChecked;

function handleCheck(e) {
  //we declare a flag variable and check if shift key was pressed down and checkbox has been checked
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //loop over every single checkbox to know if the checkbox element is equal to lastChecked value or the element that was shift clicked, the flag variable is set to the opposite value
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      //If the flag variable is true, the checkbox is checked
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

// we add an event listener for each element by looping through them
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
