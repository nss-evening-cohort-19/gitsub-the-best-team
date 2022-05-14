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






//Keep shit clean!//
const renderToDom = (divId, textToRender) => {
    const selectedElement = document.querySelector(divId);
    selectedElement.innerHTML = textToRender
};




//Rectangle 1/ - Sort scroll with 5 projects//

const rectangle1 = (yomama) => {
    let domString = '';
    for (const item of yomama) {
        domString += `
        <div class="card" style="width: 18rem;">
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
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.name}</li>
        <p class="card-text">${item.description}</p>
        <p class="card-text">${item.type}</p>
        <p class="card-text">${item.time}</p>


      

             </ul>
                </div>`;
 
            }
}
renderToDom("#rectangle1", domString);


rectangle1()
