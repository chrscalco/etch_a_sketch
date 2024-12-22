const container = document.querySelector("#container");
const button = document.querySelector("#buttonStart");

const buttonStart = document.createElement("button");

buttonStart.classList.add("buttonStart");
buttonStart.textContent = "Start Painting!";
button.appendChild(buttonStart);

function createGrid(rows, cols) {
    for (i=0; i <= rows; i++) {
        const gridCellRow = document.createElement("div");
        gridCellRow.classList.add("gridCellRow");
        container.appendChild(gridCellRow);
        for (j=0; j<=cols; j++) {
            const gridCellCol = document.createElement("div")
            gridCellCol.classList.add("gridCellCol");
            gridCellRow.appendChild(gridCellCol);
        }
    }

}
let cols = 32;
let rows = 32;
createGrid(rows,cols);

const gridCellHover = document.querySelectorAll(".gridCellCol");

gridCellHover.forEach(function(e) {
    e.addEventListener("mouseover", () => {
        e.setAttribute("style", "background-color: red;")
    })
});
