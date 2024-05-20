// Feel free to write and use any additional functions, variables, objects, etc. as you wish
const genNextSquares = (fromSquare) => {
  const lookup = {
    A: ["B", "D", "E", "F", "H"],
    B: ["A", "C", "D", "E", "F", "G", "I"],
    C: ["B", "D", "E", "F", "H"],
    D: ["A", "B", "C", "E", "G", "H", "I"],
    E: ["A", "B", "C", "D", "F", "H", "I"],
    F: ["A", "B", "C", "E", "G", "H", "I"],
    G: ["B", "D", "E", "F", "H"],
    H: ["A", "C", "D", "E", "F", "G", "I"],
    I: ["B", "D", "E", "F", "H"],
  };
  return lookup[fromSquare];
};

// const genGridCopy = (grid) => {
//   return grid.map((row) => [...row]);
// };

// const updateXs = (grid, target) => {
//   grid.forEach((row, rowIndex) => {
//     row.forEach((square, colIndex) => {
//       if (square === target) {
//         grid[rowIndex][colIndex] = "X";
//       }
//     });
//   });
// };

// function countPatternsFrom(firstPoint, length) {
//   if (!length || length > 9) return 0;
//   if (length === 1) return 1;
//   const grid = [
//     ["A", "B", "C"],
//     ["D", "E", "F"],
//     ["G", "H", "I"],
//   ];
//   const lookup = {
//     A: [0, 0],
//     B: [0, 1],
//     C: [0, 2],
//     D: [1, 0],
//     E: [1, 1],
//     F: [1, 2],
//     G: [2, 0],
//     H: [2, 1],
//     I: [2, 2],
//   };
//   const [startingY, startingX] = lookup[firstPoint];
//   console.log(`starting at: ${grid[startingY][startingX]}`);
//   const patterns = [];
//   const nextSquares = genNextSquares(grid, startingY, startingX);
//   let currPattLength = 1;
//   let currPattStr = firstPoint;
//   const recursivelyCreatePermutations = (
//     currPattLength,
//     currPattStr,
//     nextSquares
//   ) => {
//     for (let i = 0; i < nextSquares.length; i++) {
//       newPattStr = currPattStr + nextSquares[i];
//       newPattLength = currPattLength + 1;
//       const gridCopy = genGridCopy(grid);
//       updateXs(gridCopy, nextSquares[i]);
//       if (newPattLength === length) {
//         patterns.push(newPattStr);
//       } else {
//         const newNextSquares = genNextSquares(gridCopy);
//         recursivelyCreatePermutations(
//           newPattLength,
//           newPattStr,
//           newNextSquares
//         );
//       }
//     }
//   };
//   recursivelyCreatePermutations(currPattLength, currPattStr, nextSquares);
//   return patterns.length;
// }

module.exports = { genNextSquares };
