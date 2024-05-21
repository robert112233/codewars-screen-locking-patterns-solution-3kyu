// Feel free to write and use any additional functions, variables, objects, etc. as you wish
const intitialLookup = {
  A: new Set(["B", "D", "E", "F", "H"]),
  B: new Set(["A", "C", "D", "E", "F", "G", "I"]),
  C: new Set(["B", "D", "E", "F", "H"]),
  D: new Set(["A", "B", "C", "E", "G", "H", "I"]),
  E: new Set(["A", "B", "C", "D", "F", "G", "H", "I"]),
  F: new Set(["A", "B", "C", "E", "G", "H", "I"]),
  G: new Set(["B", "D", "E", "F", "H"]),
  H: new Set(["A", "C", "D", "E", "F", "G", "I"]),
  I: new Set(["B", "D", "E", "F", "H"]),
};

const genNextSquares = (lookup, fromSquare) => {
  if (!lookup["B"]) {
    lookup["A"] && lookup["C"] && lookup["A"].add("C");
    lookup["C"] && lookup["A"] && lookup["C"].add("A");
  }
  if (!lookup["D"]) {
    lookup["A"] && lookup["G"] && lookup["A"].add("G");
    lookup["G"] && lookup["A"] && lookup["G"].add("A");
  }
  if (!lookup["E"]) {
    lookup["A"] && lookup["I"] && lookup["A"].add("I");
    lookup["I"] && lookup["A"] && lookup["I"].add("A");
    lookup["B"] && lookup["H"] && lookup["B"].add("H");
    lookup["H"] && lookup["B"] && lookup["H"].add("B");
    lookup["C"] && lookup["G"] && lookup["C"].add("G");
    lookup["G"] && lookup["C"] && lookup["G"].add("C");
    lookup["D"] && lookup["F"] && lookup["D"].add("F");
    lookup["F"] && lookup["D"] && lookup["F"].add("D");
  }
  if (!lookup["F"]) {
    lookup["C"] && lookup["I"] && lookup["C"].add("I");
    lookup["I"] && lookup["C"] && lookup["I"].add("C");
  }
  if (!lookup["H"]) {
    lookup["G"] && lookup["I"] && lookup["G"].add("I");
    lookup["I"] && lookup["G"] && lookup["I"].add("G");
  }

  const nextSquares = [...lookup[fromSquare]].sort();
  const newLookup = {};
  for (const key in lookup) {
    if (key !== fromSquare) {
      newLookup[key] = new Set([]);
      for (const square of lookup[key]) {
        if (square !== fromSquare) {
          newLookup[key].add(square);
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
