const theBody = document.body; // best way than querySelector to select the html body

const container = document.createElement('div');
const containerTwo = document.createElement('div');
container.classList.add('container');
containerTwo.classList.add('containerTwo');

container.textContent = "this container";
containerTwo.textContent = "this container two";

theBody.appendChild(container);
container.appendChild(containerTwo);

function grid16() {
for(let i = 0; i < 16; i++) {
    containerTwo.appendChild(document.createElement('div'));
};
}

grid16();

const divAll = document.querySelectorAll('div');

divAll.setAttribute('style', 'border: 1px, solid, black');