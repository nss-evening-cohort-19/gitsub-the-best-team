
<<<<<<< HEAD


// import { packagesList } from "./packagesPage";
// import { packagesCardsOnDom } from "./packagesPage";
// import { packagesEventListeners } from "./packagesPage";
// import { newPackageForm } from "./packagesPage";

=======
>>>>>>> 757fb2b524059f1e6c03c3632501f17cd75a2b0e
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender
};

const repos = [
  {
    id: 1,
    name: "my-first-repo",
    info: "I am a young developer and I have no clue what I'm doing.",
    type: "JavaScript",
    tags: "Netlify, Countdown, GoldenFleece",
  },
  {
    id: 2,
    name: "running-and-gunning",
    info: "I'm from the West Coast baby, sling that thing!",
    type: "HTML",
    tags: "React, Jamstack",
  },
  {
    id: 3,
    name: "Ice-Age-Moves",
    info: "Moves so cold you'll catch a runny nose",
    type: "HTML",
    tags: "Netlify, React",
  },
  {
    id: 4,
    name: "your-favorite-song",
    info: "It go like, count that stack, pop that cap then down that jack.",
    type: "Javascript",
    tags: "Jamstack, GoldenFleece",
  },
];

const myRepoCards = () => {
  let domString = "";
  for (const card of repos) {
    domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${card.info}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">${card.tags}</a>
    <a href="#" class="card-link">${card.type}</a>
  </div>
  </div>
 `;
  }
  renderToDom("#repoContainer", domString);
};

<<<<<<< HEAD
const myRepoForm = () => {
  let domString = `
  <form>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="description" id="inputGroup-sizing-sm">Repository Name</span></span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>
=======
// AL-proj-pg
//5 projects loop//

const rectangle = [
  {
      name: "Project 1",
      description: "no description",
      type: "Private",
      time: "Update 4 mins ago",
  },


  {
      name: "Project 2",
      description: "Goals for NSS Bootcamp",
      type: "Public",
      time: "Updated 17 days ago",
  },


  {
      name: "Project 3",
      description: "no description",
      type: "Public",
      time: "Updated 37 mins ago",
  },

  {
      name: "Project 4",
      description: "Practice for inclass",
      type: "Private",
      time: "Updated 16 hours ago",
  },

  {
      name: "Project 5",
      description: "Project Practice",
      type: "Public",
      time: "Updated 27 hours ago",
  },

];

//Rectangle 1/ - Sort scroll with 5 projects//

const rectangle2 = document.querySelector("#rectangle1");
const rectangle1 = (yomama) => {
  let domString = '';
  for (const item of yomama) {
      domString += `
      <div class="card" style="width: 15rem;">
      <div class="card-header">
      Open  
       <div class="btn-group" role="group">
      <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Sort
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><a class="dropdown-item" href="#">Newest</a></li>
      <li><a class="dropdown-item" href="#">Oldest</a></li>
      <li><a class="dropdown-item" href="#">Recently Updated</a></li>
      <li><a class="dropdown-item" href="#">Least recently updated</a></li>
      <li><a class="dropdown-item" href="#">Name</a></li>
      </ul>
      </div>
      </div>
      </div>
      <ul class="list-group list-group-flush" style="width: 18rem;>
      <li class="list-group-item">${item.name}</li>
      <p class="card-text">${item.description}</p>
      <p class="card-text">${item.type}</p>
      <p class="card-text">${item.time}</p>


    

           </ul>
              </div>`;

          }
          renderToDom("#rectangle1", domString);

};


//Rectangle 3//

const rectangle3 = () => {
  let domString = 
   
    `
    <form>
  <div class="mb-3">
    <label for="project board name" class="form-label">Project Board Name</label>
    <input type="email" class="form-control" id="proj board" aria-describedby="project board">
    <div id="projectboard"</div>
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description">
  </div>
  <button type="submit" class="btn btn-primary">Create Project</button>
</form>
   
    `

    
  renderToDom("#projectForm", domString);
};



rectangle1(rectangle);
rectangle3();



function startApp () {
  packagesCardsOnDom(packagesList);
  newPackageForm();
  packagesEventListeners();//always last
}
>>>>>>> 757fb2b524059f1e6c03c3632501f17cd75a2b0e

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Description</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>
  <button type="submit" class="btn btn-primary me-md-2" type="button">Create Repository</button>
  </form>
  `;
  renderToDom("#repoFormContainer", domString);
};

const repoEventListeners = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRepoCard = {
      id: document.querySelector("#id").value,
      name: document.querySelector("#name").value,
      info: document.querySelector("#info").value,
      type: document.querySelector("#type").value,
      tags: document.querySelector("#tags").value,
    };
    repos.push(newRepoCard);
    myRepoCards(repos);
    form.reset();
  });
};

const startApp = () => {
  myRepoCards(repos);
  myRepoForm();
  repoEventListeners();
};
startApp();
<<<<<<< HEAD
=======


>>>>>>> 757fb2b524059f1e6c03c3632501f17cd75a2b0e
