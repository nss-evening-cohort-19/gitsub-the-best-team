import { packagesList, packagesCardsOnDom, newPackageForm, packagesEventListeners } from "./packagesPage.js";

import { rectangle, rectangle1 } from "./project.js";

//  import {  };

export const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};
