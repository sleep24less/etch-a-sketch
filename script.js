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
function createGrid(times) {

    cont.setAttribute('style', `display: grid;
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
        cont.appendChild(div).className = 'grid_item';
    };
};

// Checks if the size of the grid is not too big
function checkSize(times) {
    if (times > 100) {
        return true;
    }
    else {
        return false;
    }
}

// On click prompts the user to input the size of the grid and checks if its not too big
button.addEventListener('click', () => {
    let times = prompt('Choose the size of the grid:', '');
    if (checkSize(times)) {
        alert('Grid size too big! \nMaximum: 100');
    }
    else {
        createGrid(times);
    }
});

// Initial grid
createGrid(16);





