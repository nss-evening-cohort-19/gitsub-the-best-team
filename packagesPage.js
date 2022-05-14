//import { renderToDom } from "./main.js"

const packagesList = [
  {
    id: 1,
    name: "Docker",
    description: "A software platform used for building applications based on containers — small and lightweight execution environments.",
    learnMoreLink: "https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages"
  },
  {
    id: 2,
    name:  "Apache Maven",
    description: "A default package manager used for the Java programming language and the Java runtime environment.",
    learnMoreLink: "https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages"
  },
  {
    id: 3,
    name: "NuGet",
    description: "A free and open source package manager used for the Microsoft development platforms including .NET.",
    learnMoreLink: "https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-dotnet-cli-for-use-with-github-packages"
  },
  {
    id: 4,
    name: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
    learnMoreLink: "https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages"
  },
  {
    id: 5,
    name: "npm",
    description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
    learnMoreLink: "https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages"
  },
  {
    id: 6,
    name: "Containers",
    description: "A single place for your team to manage Docker images and decide who can see and access your images.",
    learnMoreLink: "https://docs.github.com/en/free-pro-team@latest/packages/working-with-a-github-packages-registry/working-with-the-container-registry"
  }
];

//CARDS
const packagesCardsOnDom = (cards) => {
  let domString = "";
  for (const pack of packagesList) {
      domString += 
      `<div id="packagesCards" class="card" style="width: 18rem;">

          <div class="card-body card-body text-center" style="background:black; color:white">
            <h5 class="card-title">${pack.name}</h5>
            <p class="card-text">${pack.description}</p>
            <button id="link" type="button" class="btn btn-success ${pack.learnMoreLink}">Learn More</button>
            <button class="btn btn-success text-end btn-sm float-right" 
          id="delete--${pack.id}">x</button>
          </div>

      </div>`;
  }
    renderToDom('#packagesContainer', domString);
}


//FORM
const newPackageForm = () => {
  const domString = 
  `<h4>Create New Package</h4>
    <p>
    <h6>Create New Package</h6>
    </p>
  <form>
    <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">Package Name</label>
     <input type="text" class="form-control" id="packageName" placeholder="Example 1">
     </div>
    <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">Link</label>
     <input type="text" class="form-control" id="logo" placeholder="Link">
     </div>
    <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">Description</label>
     <input type="text" class="form-control" id="description" placeholder="Optional">
    </div>
    <hr>
    <button class="btn btn-success" type="save">Create New Package</button>
  </form>`;
renderToDom("#packagesFormContainer", domString);
}


const packagesEventListeners = () => {
  // LOGIC FOR FORM SUBMIT
  const form = document.querySelector("form");
  form.addEventListener("save", (e) => {
    e.preventDefault();

    const newPackage = {
    
    name: document.querySelector("#name").value,
    logo: document.querySelector("#description").value,
    description: document.querySelector("#learnMoreLink").value,
    }

// push that object to the data array   
    packagesList.push(newPackage);
    packageOptions(packagesList);
//reset form
    form.reset();
  });

  // DELETE BUTTON ON CARD
  document.querySelector("#packagesContainer").addEventListener("click", (e) => {
    if (e.target.id.includes("delete")) {
      const [method, id] = e.target.id.split("--");
      const removed = packageData.findIndex(pkg => pkg.id === parseInt(id));
      packageData.splice(removed, 1);
      packageOptions(packagesList);
    }
  });
}







function startApp () {
  packagesCardsOnDom(packagesList);
  newPackageForm();

  packagesEventListeners();//always last
}

//starts app to use funtions above^^
startApp();