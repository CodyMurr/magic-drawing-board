
const brdW = 900;
const brdH = 450;
const minSquareSize = 15;
const maxSquareSize = 45;

let gridSquares, cells, color;

const board = document.querySelector('#board');
const grid = document.querySelector('#grid-area');
const randomColor = document.getElementById('random-color');
const colors = Array.from(document.querySelectorAll('#settings > .color'));

randomColor.addEventListener("click", getRandomColor);

colors.forEach(color => {
    color.addEventListener("click", changeColor); 
});

function changeColor(e) {
    color = e.target.id;
}

document.getElementById('clear').addEventListener("click", function(e) {
    cells.forEach(cell => cell.style.backgroundColor = "");
});


function getRandomColor() {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

init();

function init() {
    cells = [];
    gridSquares = minSquareSize;
    createGrid();
}

function createGrid() {
    const vertRatio = brdH/gridSquares;
    const horizRatio = brdW/gridSquares;
    const area = vertRatio * horizRatio;
    grid.style.gridTemplateColumns = `repeat(${horizRatio}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${vertRatio}, 1fr)`;
    for (let i = 0; i < area; i++) {
        cells[i] = document.createElement('section');
        grid.appendChild(cells[i]);
    }
    render();
}

function render() {
    cells.forEach(cell => {
        cell.style.border = '.25px solid #cacaca';
        cell.addEventListener("mouseover", draw);
    });
}

function draw(e) {
    e.target.style.backgroundColor = color;
}



// add html buttons to decrease/increase gridSquares variable by 2 each time one is clicked