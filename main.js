// import { packagesList, packagesCardsOnDom, newPackageForm, packagesEventListeners } from "./packagesPage.js";
// import { repos, myRepoCards, myRepoForm, repoEventListeners } from "./repos.js";
//import { rectangle1, rectangle3 } from "./project.js";


// main
export const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};
