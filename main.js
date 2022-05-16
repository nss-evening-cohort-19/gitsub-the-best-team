import { packagesList, packagesCardsOnDom, newPackageForm, packagesEventListeners } from "./packagesPage.js";

<<<<<<< HEAD
const renderToDom = (divId, textToRender) => {
=======
import { rectangle, rectangle1 } from "./project.js";

//  import {  };

export const renderToDom = (divId, textToRender) => {
>>>>>>> 04f2f8226612f0e7b1b80bfa40866d6f9c89e883
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};
