const SIZE_UP = 2;
const SIZE_DOWN = 2;
const brdW = 800;
const brdH = 400;

let gridSquares, cells, color;

const board = document.querySelector('#board');
const grid = document.querySelector('#grid-area');
const magnifier = document.getElementById('magnifier');
const gridSize = document.querySelector('#settings > label');
const colors = Array.from(document.querySelectorAll('#settings > section'));


colors.forEach(color => {
    color.addEventListener("click", changeColor);
});

function changeColor(e) {
    color = e.target.id;
}

document.getElementById('eraser').addEventListener("click", function(e) {
    cells.forEach(cell => cell.style.backgroundColor = "");
})

init();

function init() {
    cells = [];
    gridSquares = 10;
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
    gridSize.innerHTML = magnifier.value;
}

function draw(e) {
    e.target.style.backgroundColor = color;
}
