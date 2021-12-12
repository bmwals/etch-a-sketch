const theBody = document.body; // best way than querySelector to select the html body

const container = document.createElement('div');
const containerTwo = document.createElement('div');
const setGrid = document.createElement('button');
setGrid.setAttribute('id', 'setGrid');
setGrid.setAttribute('type', 'button');
setGrid.setAttribute('onClick', "gridPromp()")
container.classList.add('container');
containerTwo.classList.add('containerTwo');

container.textContent = "ETCH-A-SKETCH!";
setGrid.textContent = "Set Grid Number";

theBody.appendChild(container);
container.appendChild(setGrid);
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
            cells = document.createElement('div');
            cells.classList.add('cells');
            grid.appendChild(cells);
        }
    //    this['grid' + i].setAttribute('style', 'width: 600/16px; height: 600/16px');
    };
};

//function below is the proper way to ward off the idle hands inputting num other than < 1 and >= 100
function gridPrompt() {
    let sum = prompt('Please enter total grids', '32');
    if (sum > 100 || sum < 1 || sum > 0 === false && sum <= 100 === false) {
        alert('Please enter number between 1 to 100');
        sum = 32;
    };
    console.log(typeof(sum));
    return sum;
}

let sum = gridPrompt()

gridNum(sum);

