const ICON_SIZE = 50;
const ROWS = 2;
const COLS = 4;

const generateIconPositions = (iconSize, rows, cols) => {
  const positions = [];
  for (let row = 0; row < rows; row++) {
    const rowPositions = [];
    for (let col = 0; col < cols; col++) {
      rowPositions.push(`-${iconSize * (row * cols + col)}px`);
    }
    positions.push(rowPositions);
  }
  return positions;
};

const ICON_POSITIONS = generateIconPositions(ICON_SIZE, ROWS, COLS);

export const getIconPosition = (pathIndex, index) => {
  return ICON_POSITIONS[pathIndex]?.[index] || '0px';
};
