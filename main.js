import { packagesList, packagesCardsOnDom, newPackageForm, packagesEventListeners } from "./packagesPage.js";
// TP-adjToCards

import { repos, myRepoCards, myRepoForm, repoEventListeners } from "./repos.js";

=======
import { repos, myRepoCards, myRepoForm, repoEventListeners, startApp } from "./repos.js";

// main
export const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};
// TP-adjToCards
=======
const startApp = () => {
  myRepoCards(repos);
  myRepoForm();
  repoEventListeners();
};
startApp();
