//import { rendertoDom } from "./main.js";

export const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// export const deets = [ file, stars ];
export const pinned = [
  {
    id: 1,
    title: "gatsby-workshop",
    body: "This workshop covers the fundementals of standing at a dock and pining over lost love in green light",
    deets: {
      file: "Javascript",
      stars: "24",
    },
  },
  {
    id: 2,
    title: "getting-started-with-open-source",
    body: "It all starts with unlocking the source",
    deets: {
      file: "HTML",
      stars: "65",
    },
  },
  {
    id: 3,
    title: "Rebuild-Black-Business/RBB-Website",
    body: "Website to help connect black-owned businesses with literally everyone",
    deets: {
      file: "Javascript",
      stars: "99",
    },
  },

  {
    id: 4,
    title: "React-Ladies",
    body: "A consortium of women and non-binary that will tell you the best way to react to any social interaction",
    deets: {
      file: "Javascript",
      stars: "82",
    },
  },

  {
    id: 5,
    title: "httriri",
    body: "HTTRiRi - voice command and web navigation assisstant that's a constant learning AI based on media and culture personality Rihanna",
    deets: {
      file: "HTML",
      stars: "34",
    },
  },
  {
    id: 6,
    title: "affirmation_generator",
    body: "A brain hack application that generates random serotonin and dopamine bursts",
    deets: {
      file: "Javascript",
      stars: "∞",
    },
  },
];

//Pinned Repo to Card loop
export const repoPins1 = document.querySelector("#repoPins");
export const renderRepos = (cards) => {
  let domString = "";
  for (const repo of pinned) {
    domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${repo.title}</h5>
        <p class="card-text">${repo.body}</p>
        <a href="#" class="card-link">${repo.deets.file}</a>
        <a href="#" class="card-link">${repo.deets.stars}</a>
      </div>
    </div>`;
  }
  renderToDom("#repoPins", domString);
};

// renderRepos(pinned);

//Pinned Repo form
export const newPinnedForm = () => {
  let domString = `<h4>Add New Repo Pin</h4>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pinned Repo Name</label>
    <input type="text" class="form-control" id= "New Repo name">
    <div id="repohelp" class="form-text">What repo are you proud of?</div>
  </div>
  <div class="mb-3">
    <label for="pinned-description" class="form-label">Repo Description</label>
    <input type="text" class="form-control" id="repo-description">
    <div id="emailHelp" class="form-text">Tell us about it!</div>
  </div>

<button type="submit" class="btn btn-success">Submit</button>
</form>`;

  renderToDom("#pinnedFormContainer", domString);
};

//Overview Event Listener

export const pinnedEventListeners = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newPinnedCard = {
      id: pinned.length + 1,
      name: document.querySelector("#title").value,
      info: document.querySelector("#body").value,
    };
    pinned.push(newPinnedCard);
    renderRepos(pinned);
    form.reset();
  });
};

function startApp() {
  renderRepos(pinned);
  newPinnedForm();
  pinnedEventListeners();
}
startApp();
