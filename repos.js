const repos = [
  {
    id: 1,
    name: "my-first-repo",
    info: "I am a young developer and I have no clue what I'm doing.",
    type: "JavaScript",
    tags: "Netlify"
  },
  {
    id: 2,
    name: "running-and-gunning",
    info: "I'm from the West Coast baby, sling that thing!",
    type: "HTML",
  },
  {
    id: 3,
    name: "Ice-Age-Moves",
    info: "Moves so cold you'll catch a runny nose",
    type: "HTML",
  },
  {
    id: 4,
    name: "your-favorite-song",
    info: "It go like, count that stack, pop that cap then down that jack.",
    type: "Javascript",
  },
];

const tags = [
  {
    id: 1,
    category: "Netlify",
  },
  {
    id: 2,
    category: "React",
  },
  {
    id: 3,
    category: "Countdown",
  },
  {
    id: 4,
    category: "Jamstack",
  },
  {
    id: 5,
    category: "GoldenFleece",
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
    <a href="#" class="card-link">Tags</a>
    <a href="#" class="card-link">${card.type}</a>
  </div>
  </div>
 `;
}
  renderToDom("#repoContainer", domString)
}

const myRepoForm = () =>{
  let domString = `
  
  `
renderToDom("#repoFormContainer", domString)
}


const startApp = () => {
  myRepoCards();
}
startApp();
