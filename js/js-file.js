//alert("hewwo");

const container = document.querySelector("#grid-container");
console.log(container);
gridWidth = 960;
const squaresPerRow = 20;
if (squaresPerRow > 100) squaresPerRow = 100;

for (let i=0; i<squaresPerRow; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    console.log("created rowContainer");
    for (let i=0; i<squaresPerRow; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.setAttribute('style', `width: ${gridWidth/squaresPerRow}px; height: ${gridWidth/squaresPerRow}px;`)
        rowContainer.appendChild(gridSquare);
        console.log("appended grid square");
    }
    container.appendChild(rowContainer);
}