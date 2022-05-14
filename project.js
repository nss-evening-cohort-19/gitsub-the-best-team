
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
    Open    Closed
    <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Sort
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><a class="dropdown-item" href="#">Newest</a></li>
      <li><a class="dropdown-item" href="#">Oldest</a></li>
      <li><a class="dropdown-item" href="#">Recently Updatedk</a></li>
      <li><a class="dropdown-item" href="#">Least recently updated</a></li>
      <li><a class="dropdown-item" href="#">Name</a></li>
    </ul>
  </div>
</div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Project1</li>
    <li class="list-group-item">Project2</li>
    <li class="list-group-item">Project3</li>
    <li class="list-group-item">Project4</li>
    <li class="list-group-item">Project5</li>

  </ul>
</div>`;
    }
}
renderToDom(`#rectangle1`, domString);

