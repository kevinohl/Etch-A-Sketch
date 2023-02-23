//alert("hewwo");

const container = document.querySelector("#grid-container");
console.log(container);
gridWidth = 960;
const squaresPerRow = 20;
if (squaresPerRow > 100) squaresPerRow = 100;

for (let i = 0; i < squaresPerRow; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    for (let i = 0; i < squaresPerRow; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.width = `${gridWidth / squaresPerRow}px`;
        gridSquare.style.height = `${gridWidth / squaresPerRow}px`;
        gridSquare.addEventListener('mousemove', function (e) {
            console.log(this);
            this.style["background-color"] = "black";
            e.stopPropagation();
        })
        rowContainer.appendChild(gridSquare);
    }
    container.appendChild(rowContainer);
}

function colorSquare() {
    console.log(this);


}