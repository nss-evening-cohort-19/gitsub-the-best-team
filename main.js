import { packagesList, packagesCardsOnDom, newPackageForm, packagesEventListeners } from "./packagesPage.js";
import { repos, myRepoCards, myRepoForm, repoEventListeners, startApp } from "./repos.js";

export const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};
