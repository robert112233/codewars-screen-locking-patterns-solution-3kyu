const intitialLookup = {
  //A does not have access to C or G for example, because B and D block.
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
  //if a blocking square has already been accessed and removed, open up the squares that were blocked
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
  //create a new lookup, that doesn't include the visited square anywhere
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
  //add each nextSquare to the current string eg. AB + C
  for (let i = 0; i < nextSquares.length; i++) {
    newPattStr = currPattStr + nextSquares[i];
    newPattLength = currPattLength + 1;
    if (newPattLength === length) {
      //you've found a pattern of the desired length
      patterns.push(newPattStr);
    } else {
      //seek to increase the pattern further by adding available squares
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
  //once the above for loop has no more squares to iterate through, the recursive element stops
};

function countPatternsFrom(firstPoint, length) {
  if (!length || length > 9) return 0;
  if (length === 1) return 1;

  const patterns = [];
  const [nextSquares, newLookup] = genNextSquares(intitialLookup, firstPoint);
  let currPattLength = 1; //All patterns have at least one letter eg. E
  let currPattStr = firstPoint; //All patterns must start with the given letter eg. E
  recursivelyCreatePermutations(
    currPattLength,
    currPattStr,
    nextSquares,
    newLookup,
    patterns,
    length
  );
  return patterns.length;
}

module.exports = {
  genNextSquares,
  intitialLookup,
  countPatternsFrom,
  recursivelyCreatePermutations,
};
