const theBody = document.body; // best way than querySelector to select the html body

const container = document.createElement('div');
const containerTwo = document.createElement('div');
container.classList.add('container');
containerTwo.classList.add('containerTwo');

container.textContent = "this container";

theBody.appendChild(container);
container.appendChild(containerTwo);

/*
function grid16() {
for(let i = 0; i < 16; i++) {
    containerTwo.appendChild(document.createElement('div'));
};
}

grid16();
*/
containerTwo.setAttribute('style', 'display: flex; flex-wrap: wrap; margin: auto; padding: 1px; align-content: center; width: 700px; height: 700px')

// the function below is proper way to create variable with loop. I utilize
// this method to create numbers of div by manipulate the DOM 

function gridNum(sum) {
    for (let i = 0; i < sum; i++) {
        this['grid' + i] = document.createElement('div');
        this['grid' + i].classList.add('grid');
        containerTwo.appendChild(this['grid' + i])
        this['grid' + i].setAttribute('style', 'display: flex; margin: 0px; width: auto; height: auto; padding: 1px; border: 1px solid black');
    };
};

gridNum(24);