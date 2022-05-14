const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender
};

const deets =[ file, stars];
const pinned = [


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
      stars: "82"

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
  const repoPins = document.querySelector('#repoPins');
  const renderRepos = (pinned) => {
    let domString = "";
    for (const repo of pinned){ domString +=
  
      `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${repo.title}</h5>
        <p class="card-text">${repo.body}</p>
        <a href="#" class="card-link">${repo.deets.file}</a>
        <a href="#" class="card-link">${repo.deets.stars}</a>
      </div>
    </div>`
  
  };
  
  renderToDom('#repoPins', domString);
  
  
  }
  
  renderRepos(pinned);
