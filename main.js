


//import { packagesList } from "./packagesPage";
//import { packagesCardsOnDom } from "./packagesPage";

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender
};
// AS-pinned
const pinned = [

  {
    id: 1,
    title: "gatsby-workshop",
  body: "This workshop covers the fundementals of standing at a dock and pining over lost love in green light",
  },
  {
    id: 2,
    title: "getting-started-with-open-source",
  body: "It all starts with unlocking the source",
  },
  
  {
    id: 3,
    title: "Rebuild-Black-Business/RBB-Website",
  body: "Website to help connect black-owned businesses with literally everyone",
  },
  
  {
    id: 4,
    title: "React-Ladies",
  body: "A consortium of women and non-binary that will tell you the best way to react to any social interaction",
  
  
  },
  
  {
    id: 5,
    title: "httriri",
    body: "HTTRiRi - voice command and web navigation assisstant that's a constant learning AI based on media and culture personality Rihanna",
  
  
  },
  
  {
    id: 6,
    title: "affirmation_generator",
    body: "A brain hack application that generates random serotonin and dopamine bursts",
  },
  
  
  ];
  
  //Pinned Repo to Card loop
  const repoPins = document.querySelector('#repoPins');
  const renderRepos = (pinned) => {
    let domString = "";
    for (const repo of pinned){ domString +=
  
      `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${repo.title}</h5>
        <p class="card-text">${repo.body}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>`
  
  };
  
  renderToDom('#repoPins', domString);
  
  
  }
  
  renderRepos(pinned);
=======








function startApp () {
  packagesCardsOnDom(packagesList);
  newPackageForm();
  eventListeners();//always last
}

//starts app to use funtions above^^
startApp();
// main
