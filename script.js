const DEFAULT_COLOR = '#e06565';
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

// Grid and title
const cont = document.createElement('div');
const main = document.querySelector('.main');

// Buttons
const colorPicker = document.querySelector('#color_picker');
const colorBtn = document.querySelector('#color');
const rainbowBtn = document.querySelector('#rainbow');
const eraseBtn = document.querySelector('#erase');
const sizeBtn = document.querySelector('#size');
const resetBtn = document.querySelector('#reset');

colorPicker.oninput = (e) => currentColor = `${e.target.value}`;
colorBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraseBtn.onclick = () => setCurrentMode('erase');
resetBtn.onclick = () => resetGrid();


// Insert grid
cont.className = 'container';
main.appendChild(cont);


// Random number generator
function randomNumber(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
};

// Sets current mode to paint
function setCurrentMode(newMode) {
    activeButton(newMode);
    currentMode = newMode;
};

// Button pressed style
function activeButton(newMode) {
    if (currentMode === 'color') {
        colorBtn.classList.remove('active');
    }
    else if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    }
    else if (currentMode === 'erase') {
        eraseBtn.classList.remove('active');
    }

    if (newMode === 'color') {
        colorBtn.classList.add('active');
    }
    else if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
    }
    else if (newMode === 'erase') {
        eraseBtn.classList.add('active');
    }
};

// Change color
function changeColor(e) {
    if (currentMode === 'color') {
        e.target.classList.add('active');
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode === 'rainbow') {
        let randomR = randomNumber(255);
        let randomG = randomNumber(255);
        let randomB = randomNumber(255);
        e.target.classList.add('active');
        e.target.style.backgroundColor = `rgba(${randomR},${randomG},${randomB},0.4)`;
    }
    else if (currentMode === 'erase') {
        e.target.classList.add('active');
        e.target.style.backgroundColor = '#FFFFFF';
    }
};

// Create a grid 
function createGrid(times) {

    cont.setAttribute('style', `display: grid;
    grid-template-columns: repeat(${times}, 1fr);
    grid-template-rows: repeat(${times}, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 70vw;
    max-width: 70vh;
    aspect-ratio: 1 / 1 ;
    align-items: center;
    justify-items: center;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 16px;
    background-color: #ffffff;`);

    // creating grid items and drawing with mouseover 
    for (let i = 0; i < (times * times); i++) {
        const div = document.createElement('div');
        div.className = "grid_item";
        div.addEventListener('mouseover', changeColor);
        cont.appendChild(div);
    };
};

// Clear the grid
function resetGrid() {
    const div = document.querySelectorAll('.grid_item');
    div.forEach(item => {
        item.style.backgroundColor = '#ffffff';
    });
};

// Checks if the size of the grid is not too big
function checkSize(times) {
    if (times > 100) {
        return true;
    }
    else {
        return false;
    }
};

// On click prompts the user to input the size of the grid and checks if its not too big
outer: sizeBtn.addEventListener('click', () => {
    let times = prompt('Choose the size of the grid:', '');
    if (checkSize(times)) {
        alert('Grid size too big! \nMaximum: 100');
        createGrid(16);
    }
    else {
        resetGrid();
        createGrid(times);
    }
});


// Initial start-up
activeButton('color');
createGrid(16);





