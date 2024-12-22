const container = document.querySelector("#container");
const button = document.querySelector("#buttonStart");
const buttonStart = document.createElement("button");

buttonStart.classList.add("buttonStart");
buttonStart.textContent = "Start Painting!";
button.appendChild(buttonStart);

buttonStart.addEventListener("click", () => {

    deleteGrid();
    const size = prompt("Enter the grid size you want between 10 and 100.")

    while(size<10 || size>100) {
        size = prompt("Choose a size between 10 and 100.")
    }

    container.setAttribute("style","border: 2px solid black");
    createGrid(size,size);

    const gridCellHover = document.querySelectorAll(".gridCellCol");

    gridCellHover.forEach(function(e) {
        e.addEventListener("mouseover", () => {
            e.setAttribute("style", "background-color: red;")
        })
    });
})


function createGrid(rows, cols) {
    for (i=1; i <= rows; i++) {
        const gridCellRow = document.createElement("div");
        gridCellRow.classList.add("gridCellRow");
        container.appendChild(gridCellRow);
        for (j=1; j<=cols; j++) {
            const gridCellCol = document.createElement("div")
            gridCellCol.classList.add("gridCellCol");
            gridCellRow.appendChild(gridCellCol);
        }
    }

}

function deleteGrid() {
    const removeGrid = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}



