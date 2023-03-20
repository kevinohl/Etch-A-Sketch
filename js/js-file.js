// alert("hewwo");

const container = document.querySelector('#grid-container');
const layoutButton = document.querySelector('#layout-btn');
const gridWidth = 960;
const startingSquaresPerRow = 20;

function setLayout(squaresPerRow) {
  // erase existing grid
  container.innerHTML = '';
  if (squaresPerRow > 100) squaresPerRow = 100;
  for (let i = 0; i < squaresPerRow; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');
    for (let i = 0; i < squaresPerRow; i++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridSquare.style.width = `${gridWidth / squaresPerRow}px`;
      gridSquare.style.height = `${gridWidth / squaresPerRow}px`;
      gridSquare.style['background-color'] = 'rgb(255,255,255)';
      gridSquare.addEventListener('mouseover', colorSquare);
      rowContainer.appendChild(gridSquare);
    }
    container.appendChild(rowContainer);
  }
}

function colorSquare() {
  const currentColor = this.style['background-color'];
  const rgbValues = currentColor.substring(4, currentColor.length - 1).split(',');
  const newRgbValues = [];
  for (const colorValue of rgbValues) {
    if (colorValue - 25 < 0) newRgbValues.push(0);
    else newRgbValues.push(colorValue - 25);
  }
  const newColor = `rgb(${newRgbValues.join()})`;
  this.style['background-color'] = newColor;
}

layoutButton.addEventListener('click', () => {
  setLayout(prompt('How many squares per row?'));
});

setLayout(startingSquaresPerRow);
