


//import { packagesList } from "./packagesPage";
//import { packagesCardsOnDom } from "./packagesPage";

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender
};








function startApp () {
  packagesCardsOnDom(packagesList);
  newPackageForm();
  eventListeners();//always last
}

//starts app to use funtions above^^
startApp();
