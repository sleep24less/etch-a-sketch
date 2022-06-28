const cont = document.createElement('div');
const title = document.createElement('h1');
const button = document.createElement('button');

// Set up main structure of HTML
cont.className = 'container';
document.body.prepend(cont);
cont.before(title);
title.textContent = 'ETCH A SKETCH';
cont.after(button);
button.id = "button";
button.textContent = "GENERATE";


// Create a grid 
function createGrid(parent, times) {

    parent.setAttribute('style', `display: grid;
    grid-template-columns: repeat(${times}, 1fr);
    grid-template-rows: repeat(${times}, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 1000px;
    height: 1000px;
    align-items: center;
    justify-items: center;`);

    for (let i = 0; i < (times * times); i++) {
        let div = document.createElement('div');
        parent.appendChild(div).className = 'grid_item';
    };
};

createGrid(cont, 16);





