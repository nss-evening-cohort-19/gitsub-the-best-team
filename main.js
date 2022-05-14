import { packagesList } from "./packagesPage";
import { packagesCardsOnDom } from "./packagesPage";
import { packagesEventListeners } from "./packagesPage";
import { newPackageForm } from "./packagesPage";


const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};


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

//starts app to use funtions above^^
startApp();


