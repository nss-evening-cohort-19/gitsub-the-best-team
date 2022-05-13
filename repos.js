const repos = [
  {
    id: 1,
    name: "my-first-repo",
  },
  {
    id: 2,
    name: "running-and-gunning",
  },
  {
    id: 3,
    name: "Ice-Age-Moves"
  },
  {
    id: 4,
    name: "your-favorite-song"
  },
];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender
};

const myRepoCards = () => {
  let domString = "";
  domString = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  </div>`;
  renderToDom("#repoContainer", domString)
}


const startApp = () => {
  myRepoCards();
}
startApp();
