// Feel free to write and use any additional functions, variables, objects, etc. as you wish
const intitialLookup = {
  A: ["B", "D", "E", "F", "H"],
  B: ["A", "C", "D", "E", "F", "G", "I"],
  C: ["B", "D", "E", "F", "H"],
  D: ["A", "B", "C", "E", "G", "H", "I"],
  E: ["A", "B", "C", "D", "F", "G", "H", "I"],
  F: ["A", "B", "C", "E", "G", "H", "I"],
  G: ["B", "D", "E", "F", "H"],
  H: ["A", "C", "D", "E", "F", "G", "I"],
  I: ["B", "D", "E", "F", "H"],
};

const genNextSquares = (lookup, fromSquare) => {
  if (!lookup["B"]) {
    lookup["A"] && lookup["C"] && lookup["A"].push("C");
    lookup["C"] && lookup["A"] && lookup["C"].push("A");
  }
  if (!lookup["D"]) {
    lookup["A"] && lookup["G"] && lookup["A"].push("G");
    lookup["G"] && lookup["A"] && lookup["G"].push("A");
  }
  if (!lookup["E"]) {
    lookup["A"] && lookup["I"] && lookup["A"].push("I");
    lookup["I"] && lookup["A"] && lookup["I"].push("A");
    lookup["B"] && lookup["H"] && lookup["B"].push("H");
    lookup["H"] && lookup["B"] && lookup["H"].push("B");
    lookup["C"] && lookup["G"] && lookup["C"].push("G");
    lookup["G"] && lookup["C"] && lookup["G"].push("C");
    lookup["D"] && lookup["F"] && lookup["D"].push("F");
    lookup["F"] && lookup["D"] && lookup["F"].push("D");
  }
  if (!lookup["F"]) {
    lookup["C"] && lookup["I"] && lookup["C"].push("I");
    lookup["I"] && lookup["C"] && lookup["I"].push("C");
  }
  if (!lookup["H"]) {
    lookup["G"] && lookup["I"] && lookup["G"].push("I");
    lookup["I"] && lookup["G"] && lookup["I"].push("G");
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

const recursivelyCreatePermutations = (
  currPattLength,
  currPattStr,
  nextSquares,
  lookup,
  patterns,
  length
) => {
  for (let i = 0; i < nextSquares.length; i++) {
    newPattStr = currPattStr + nextSquares[i];
    newPattLength = currPattLength + 1;
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
        newLookup,
        patterns,
        length
      );
    }
  }
};

function countPatternsFrom(firstPoint, length) {
  // console.log(`Starting at ${firstPoint}`);
  if (!length || length > 9) return 0;
  if (length === 1) return 1;

  const patterns = [];
  const [nextSquares, newLookup] = genNextSquares(intitialLookup, firstPoint);
  let currPattLength = 1;
  let currPattStr = firstPoint;
  recursivelyCreatePermutations(
    currPattLength,
    currPattStr,
    nextSquares,
    newLookup,
    patterns,
    length
  );
  console.log(patterns, "any dupes?");
  const uniquePatterns = [...new Set(patterns)];
  return uniquePatterns.length;
}

module.exports = {
  genNextSquares,
  intitialLookup,
  countPatternsFrom,
  recursivelyCreatePermutations,
};
