// Feel free to write and use any additional functions, variables, objects, etc. as you wish
const intitialLookup = {
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

const genNextSquares = (lookup, fromSquare) => {
  if (!lookup["B"]) {
    lookup["A"].push("C");
    lookup["C"].push("A");
  }
  if (!lookup["D"]) {
    lookup["A"].push("G");
    lookup["G"].push("A");
  }
  if (!lookup["E"]) {
    lookup["A"] && lookup["I"] && lookup["A"].push("I");
    lookup["I"] && lookup["A"] && lookup["I"].push("A");
    lookup["B"] && lookup["H"] && lookup["B"].push("H");
    lookup["H"] && lookup["B"] && lookup["H"].push("B");
    lookup["C"] && lookup["G"] && lookup["C"].push("G");
    lookup["G"] && lookup["B"] && lookup["G"].push("B");
    lookup["D"] && lookup["F"] && lookup["D"].push("F");
    lookup["F"] && lookup["D"] && lookup["F"].push("D");
  }
  if (!lookup["F"]) {
    lookup["C"].push("I");
    lookup["I"].push("C");
  }
  if (!lookup["H"]) {
    lookup["G"].push("I");
    lookup["I"].push("G");
  }

  const nextSquares = lookup[fromSquare].sort();
  const newLookup = {};
  for (const key in lookup) {
    if (key !== fromSquare) {
      newLookup[key] = [];
      for (const square of lookup[key]) {
        if (square !== fromSquare) {
          newLookup[key].push(square);
        }
      }
    }
  }
  return [nextSquares, newLookup];
};

function countPatternsFrom(firstPoint, length) {
  console.log(`Starting at ${firstPoint}`);
  if (!length || length > 9) return 0;
  if (length === 1) return 1;

  const patterns = [];
  const [nextSquares, newLookup] = genNextSquares(intitialLookup, firstPoint);
  let currPattLength = 1;
  let currPattStr = firstPoint;
  const recursivelyCreatePermutations = (
    currPattLength,
    currPattStr,
    nextSquares,
    lookup
  ) => {
    for (let i = 0; i < nextSquares.length; i++) {
      newPattStr = currPattStr + nextSquares[i];
      newPattLength = currPattLength + 1;
      console.log(newPattStr, newPattLength);
      if (newPattLength === length) {
        patterns.push(newPattStr);
      } else {
        const [newNextSquares, newLookup] = genNextSquares(
          lookup,
          nextSquares[i]
        );
        recursivelyCreatePermutations(
          newPattLength,
          newPattStr,
          newNextSquares,
          newLookup
        );
      }
    }
  };
  recursivelyCreatePermutations(
    currPattLength,
    currPattStr,
    nextSquares,
    newLookup
  );
  return patterns.length;
}

module.exports = { genNextSquares, intitialLookup, countPatternsFrom };
