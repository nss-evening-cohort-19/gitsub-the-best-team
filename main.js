import { packagesList } from "./packagesPage";
import { packagesCardsOnDom } from "./packagesPage";
import { packagesEventListeners } from "./packagesPage";
import { newPackageForm } from "./packagesPage";

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

function startApp () {
  packagesCardsOnDom(packagesList);
  newPackageForm();
  packagesEventListeners();//always last
}

//starts app to use funtions above^^
startApp();

