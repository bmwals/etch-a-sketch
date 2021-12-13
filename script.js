const theBody = document.body; // best way than querySelector to select the html body

const container = document.createElement('div');
const containerTwo = document.createElement('div');
const setGrid = document.createElement('button');
const resetGrid = document.createElement('button');
setGrid.setAttribute('id', 'setGrid');
setGrid.setAttribute('type', 'button');
resetGrid.setAttribute('id', 'resetGrid');
resetGrid.setAttribute('type', 'button');
container.classList.add('container');
containerTwo.classList.add('containerTwo');

container.textContent = "ETCH-A-SKETCH!";
setGrid.textContent = "Set Grid Number";
resetGrid.textContent = "Reset Grid";

theBody.appendChild(container);
container.appendChild(setGrid);
container.appendChild(resetGrid);
container.appendChild(containerTwo);


// containerTwo.setAttribute('style', 'display: flex; flex-wrap: wrap; margin: auto; padding: 1px; align-content: center; width: 700px; height: 700px')

// the function below is proper way to create variable with loop. I utilize
// this method to create numbers of div by manipulate the DOM 

gridNum(32);

function gridNum(sum) {
    containerTwo.replaceChildren(); // this stuff removes whole child nodes
    for (let i = 0; i < sum; i++) {
        grid = document.createElement('div');
        grid.classList.add('grid');
        containerTwo.appendChild(grid);
        for (let j = 0; j < sum; j++) {
            cells = document.createElement('div');
            cells.classList.add('cells');
            grid.appendChild(cells);
        }
        cellBlack();
        //    this['grid' + i].setAttribute('style', 'width: 600/16px; height: 600/16px');
    };
};

//function below is the proper way to ward off the idle hands inputting num other than < 1 and >= 100
function gridPrompt() {
    let sum = prompt('Please enter cells x cells between 1 to 100', '32');
    if (sum > 100 || sum < 1 || sum > 0 === false && sum <= 100 === false) {
        alert('Please enter number between 1 to 100. Applying 32x32 cells...');
        return gridNum(32);
    };
    gridNum(sum);
};

setGrid.addEventListener('click', () => {
    sum = gridPrompt();
});

resetGrid.addEventListener('click', () => {
    containerTwo.replaceChildren(); // this stuff removes whole child nodes
});

function cellBlack() {
    let cellAll = document.querySelectorAll('.cells');
    cellAll.forEach(cells => {
        cells.addEventListener('mouseover', () =>
        cells.setAttribute('style', 'background: black; color: black; border: 1px solid black')
    )})
};

cellBlack();