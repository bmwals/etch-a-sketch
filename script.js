const theBody = document.body; // best way than querySelector to select the html body

const container = document.createElement('div');
const containerTwo = document.createElement('div');
container.classList.add('container');
containerTwo.classList.add('containerTwo');

container.textContent = "ETCH-A-SKETCH!";

theBody.appendChild(container);
container.appendChild(containerTwo);

// containerTwo.setAttribute('style', 'display: flex; flex-wrap: wrap; margin: auto; padding: 1px; align-content: center; width: 700px; height: 700px')

// the function below is proper way to create variable with loop. I utilize
// this method to create numbers of div by manipulate the DOM 
function gridNum(sum) {
    for (let i = 0; i < sum; i++) {
        grid = document.createElement('div');
        grid.classList.add('grid');
        containerTwo.appendChild(grid);
        for (let j = 0; j < sum; j++) {
            gridIn = document.createElement('div');
            gridIn.classList.add('gridIn');
            grid.appendChild(gridIn);
        }
    //    this['grid' + i].setAttribute('style', 'width: 600/16px; height: 600/16px');
    };
};

gridNum(10);