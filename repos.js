const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

export const repos = [
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

export const myRepoCards = () => {
  let domString = "";
  for (const card of repos) {
    domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${card.info}</h6>
    <a href="#" class="card-link">${card.tags}</a>
    <a href="#" class="card-link">${card.type}</a>
  </div>
  </div>
 `;
  }
  renderToDom("#repoContainer", domString);
};

export const myRepoForm = () => {
  let domString = `
  <form>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="description" id="name" id="inputGroup-sizing-sm">Repository Name</span></span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="info" id="inputGroup-sizing-lg">Description</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="type" id="inputGroup-sizing-lg">File Type</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="tags" id="inputGroup-sizing-lg">File Tags</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>

  <button type="submit" class="btn btn-primary me-md-2" type="submit">Create Repository</button>
  </form>
  `;
  renderToDom("#repoFormContainer", domString);
};

export const repoEventListeners = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRepoCard = {
      id: repos.length + 1,
      name: document.querySelector("#name").value,
      info: document.querySelector("#info").value,
      type: document.querySelector("#type").value,
      tags: document.querySelector("#tags").value,
    };
    repos.push(newRepoCard);
    myRepoCards(repos);
    form.reset();
  });

  document.querySelector("#repoContainer").addEventListener("click", (e) => {
    if (e.target.id.includes("delete")) {
      const [method, id] = e.target.id.split("--");
      const removed = repos.findIndex((pkg) => pkg.id === parseInt(id));
      packagesList.splice(removed, 1);
      myRepoCards(repos);
    }
  });
};

const startApp = () => {
  myRepoCards(repos);
  myRepoForm();
  repoEventListeners();
};
startApp();
