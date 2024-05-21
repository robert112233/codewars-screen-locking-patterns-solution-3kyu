const {
  genNextSquares,
  intitialLookup,
  countPatternsFrom,
  recursivelyCreatePermutations,
} = require("../index");

describe("genNextSquares", () => {
  test("returns squares with no bridging logic in place", () => {
    expect(genNextSquares(intitialLookup, "A")[0]).toEqual([
      "B",
      "D",
      "E",
      "F",
      "H",
    ]);
    expect(genNextSquares(intitialLookup, "B")[0]).toEqual([
      "A",
      "C",
      "D",
      "E",
      "F",
      "G",
      "I",
    ]);
    expect(genNextSquares(intitialLookup, "C")[0]).toEqual([
      "B",
      "D",
      "E",
      "F",
      "H",
    ]);
    expect(genNextSquares(intitialLookup, "D")[0]).toEqual([
      "A",
      "B",
      "C",
      "E",
      "G",
      "H",
      "I",
    ]);
    expect(genNextSquares(intitialLookup, "E")[0]).toEqual([
      "A",
      "B",
      "C",
      "D",
      "F",
      "G",
      "H",
      "I",
    ]);
    expect(genNextSquares(intitialLookup, "F")[0]).toEqual([
      "A",
      "B",
      "C",
      "E",
      "G",
      "H",
      "I",
    ]);
    expect(genNextSquares(intitialLookup, "G")[0]).toEqual([
      "B",
      "D",
      "E",
      "F",
      "H",
    ]);
    expect(genNextSquares(intitialLookup, "H")[0]).toEqual([
      "A",
      "C",
      "D",
      "E",
      "F",
      "G",
      "I",
    ]);
    expect(genNextSquares(intitialLookup, "I")[0]).toEqual([
      "B",
      "D",
      "E",
      "F",
      "H",
    ]);
  });
  test("returns new lookup table with visited squares removed", () => {
    expect(genNextSquares(intitialLookup, "A")[1]).toEqual({
      B: new Set(["C", "D", "E", "F", "G", "I"]),
      C: new Set(["B", "D", "E", "F", "H"]),
      D: new Set(["B", "C", "E", "G", "H", "I"]),
      E: new Set(["B", "C", "D", "F", "G", "H", "I"]),
      F: new Set(["B", "C", "E", "G", "H", "I"]),
      G: new Set(["B", "D", "E", "F", "H"]),
      H: new Set(["C", "D", "E", "F", "G", "I"]),
      I: new Set(["B", "D", "E", "F", "H"]),
    });
    expect(genNextSquares(intitialLookup, "B")[1]).toEqual({
      A: new Set(["D", "E", "F", "H"]),
      C: new Set(["D", "E", "F", "H"]),
      D: new Set(["A", "C", "E", "G", "H", "I"]),
      E: new Set(["A", "C", "D", "F", "G", "H", "I"]),
      F: new Set(["A", "C", "E", "G", "H", "I"]),
      G: new Set(["D", "E", "F", "H"]),
      H: new Set(["A", "C", "D", "E", "F", "G", "I"]),
      I: new Set(["D", "E", "F", "H"]),
    });
    expect(genNextSquares(intitialLookup, "C")[1]).toEqual({
      A: new Set(["B", "D", "E", "F", "H"]),
      B: new Set(["A", "D", "E", "F", "G", "I"]),
      D: new Set(["A", "B", "E", "G", "H", "I"]),
      E: new Set(["A", "B", "D", "F", "G", "H", "I"]),
      F: new Set(["A", "B", "E", "G", "H", "I"]),
      G: new Set(["B", "D", "E", "F", "H"]),
      H: new Set(["A", "D", "E", "F", "G", "I"]),
      I: new Set(["B", "D", "E", "F", "H"]),
    });
    expect(genNextSquares(intitialLookup, "D")[1]).toEqual({
      A: new Set(["B", "E", "F", "H"]),
      B: new Set(["A", "C", "E", "F", "G", "I"]),
      C: new Set(["B", "E", "F", "H"]),
      E: new Set(["A", "B", "C", "F", "G", "H", "I"]),
      F: new Set(["A", "B", "C", "E", "G", "H", "I"]),
      G: new Set(["B", "E", "F", "H"]),
      H: new Set(["A", "C", "E", "F", "G", "I"]),
      I: new Set(["B", "E", "F", "H"]),
    });
    expect(genNextSquares(intitialLookup, "E")[1]).toEqual({
      A: new Set(["B", "D", "F", "H"]),
      B: new Set(["A", "C", "D", "F", "G", "I"]),
      C: new Set(["B", "D", "F", "H"]),
      D: new Set(["A", "B", "C", "G", "H", "I"]),
      F: new Set(["A", "B", "C", "G", "H", "I"]),
      G: new Set(["B", "D", "F", "H"]),
      H: new Set(["A", "C", "D", "F", "G", "I"]),
      I: new Set(["B", "D", "F", "H"]),
    });
    expect(genNextSquares(intitialLookup, "F")[1]).toEqual({
      A: new Set(["B", "D", "E", "H"]),
      B: new Set(["A", "C", "D", "E", "G", "I"]),
      C: new Set(["B", "D", "E", "H"]),
      D: new Set(["A", "B", "C", "E", "G", "H", "I"]),
      E: new Set(["A", "B", "C", "D", "G", "H", "I"]),
      G: new Set(["B", "D", "E", "H"]),
      H: new Set(["A", "C", "D", "E", "G", "I"]),
      I: new Set(["B", "D", "E", "H"]),
    });
    expect(genNextSquares(intitialLookup, "G")[1]).toEqual({
      A: new Set(["B", "D", "E", "F", "H"]),
      B: new Set(["A", "C", "D", "E", "F", "I"]),
      C: new Set(["B", "D", "E", "F", "H"]),
      D: new Set(["A", "B", "C", "E", "H", "I"]),
      E: new Set(["A", "B", "C", "D", "F", "H", "I"]),
      F: new Set(["A", "B", "C", "E", "H", "I"]),
      H: new Set(["A", "C", "D", "E", "F", "I"]),
      I: new Set(["B", "D", "E", "F", "H"]),
    });
    expect(genNextSquares(intitialLookup, "H")[1]).toEqual({
      A: new Set(["B", "D", "E", "F"]),
      B: new Set(["A", "C", "D", "E", "F", "G", "I"]),
      C: new Set(["B", "D", "E", "F"]),
      D: new Set(["A", "B", "C", "E", "G", "I"]),
      E: new Set(["A", "B", "C", "D", "F", "G", "I"]),
      F: new Set(["A", "B", "C", "E", "G", "I"]),
      G: new Set(["B", "D", "E", "F"]),
      I: new Set(["B", "D", "E", "F"]),
    });
    expect(genNextSquares(intitialLookup, "I")[1]).toEqual({
      A: new Set(["B", "D", "E", "F", "H"]),
      B: new Set(["A", "C", "D", "E", "F", "G"]),
      C: new Set(["B", "D", "E", "F", "H"]),
      D: new Set(["A", "B", "C", "E", "G", "H"]),
      E: new Set(["A", "B", "C", "D", "F", "G", "H"]),
      F: new Set(["A", "B", "C", "E", "G", "H"]),
      G: new Set(["B", "D", "E", "F", "H"]),
      H: new Set(["A", "C", "D", "E", "F", "G"]),
    });
  });
  test("hidden squares are included if blocking squares have already been accessed", () => {
    const partialLookup1 = {
      A: new Set(["D", "E", "H"]),
      C: new Set(["D", "E", "H"]),
      D: new Set(["A", "C", "E", "G", "H", "I"]),
      E: new Set(["A", "C", "D", "H", "I"]),
      G: new Set(["D", "E", "H"]),
      H: new Set(["A", "C", "D", "E", "G", "I"]),
      I: new Set(["D", "E", "H"]),
    };
    expect(genNextSquares(partialLookup1, "C")[0]).toEqual([
      "A",
      "D",
      "E",
      "H",
      "I",
    ]);
    const partialLookup2 = {
      B: new Set(["C", "D", "F", "G", "I"]),
      C: new Set(["B", "D", "F", "H"]),
      D: new Set(["B", "C", "G", "H", "I"]),
      F: new Set(["B", "C", "G", "H", "I"]),
      G: new Set(["B", "D", "F", "H"]),
      H: new Set(["C", "D", "F", "G", "I"]),
      I: new Set(["B", "D", "F", "H"]),
    };
    expect(genNextSquares(partialLookup2, "D")[0]).toEqual([
      "B",
      "C",
      "F",
      "G",
      "H",
      "I",
    ]);
  });
  test("hidden squares are not included if they have previously been accessed", () => {
    const partialLookup1 = {
      A: new Set(["D", "H"]),
      C: new Set(["D", "H"]),
      D: new Set(["A", "C", "G", "H", "I"]),
      G: new Set(["D", "H"]),
      H: new Set(["A", "C", "D", "G", "I"]),
      I: new Set(["D", "H"]),
    };
    expect(genNextSquares(partialLookup1, "H")[0]).toEqual([
      "A",
      "C",
      "D",
      "G",
      "I",
    ]);
    const partialLookup2 = {
      B: new Set(["C", "E", "F", "G", "I"]),
      C: new Set(["B", "E", "F"]),
      E: new Set(["B", "C", "F", "I"]),
      F: new Set(["B", "C", "E", "G", "I"]),
      G: new Set(["B", "E", "F"]),
      I: new Set(["B", "E", "F"]),
    };
    expect(genNextSquares(partialLookup2, "G")[0]).toEqual([
      "B",
      "E",
      "F",
      "I",
    ]);
  });
  test("returned lookup table includes bridging where necessary", () => {
    const partialLookup1 = {
      A: new Set(["D", "E", "H"]),
      C: new Set(["D", "E", "H"]),
      D: new Set(["A", "C", "E", "G", "H", "I"]),
      E: new Set(["A", "C", "D", "H", "I"]),
      G: new Set(["D", "E", "H"]),
      H: new Set(["A", "C", "D", "E", "G", "I"]),
      I: new Set(["D", "E", "H"]),
    };
    expect(genNextSquares(partialLookup1, "C")[1]).toEqual({
      A: new Set(["D", "E", "H"]),
      D: new Set(["A", "E", "G", "H", "I"]),
      E: new Set(["A", "D", "H", "I"]),
      G: new Set(["D", "E", "H"]),
      H: new Set(["A", "D", "E", "G", "I"]),
      I: new Set(["D", "E", "H"]),
    });
    const partialLookup2 = {
      B: new Set(["C", "E", "F", "G", "I"]),
      C: new Set(["B", "E", "F"]),
      E: new Set(["B", "C", "F", "I"]),
      F: new Set(["B", "C", "E", "G", "I"]),
      G: new Set(["B", "E", "F"]),
      I: new Set(["B", "E", "F"]),
    };
    expect(genNextSquares(partialLookup2, "G")[1]).toEqual({
      B: new Set(["C", "E", "F", "I"]),
      C: new Set(["B", "E", "F"]),
      E: new Set(["B", "C", "F", "I"]),
      F: new Set(["B", "C", "E", "I"]),
      I: new Set(["B", "E", "F"]),
    });
  });
});

describe("recursivelyCreatePermutations", () => {
  test("Missing DEG string", () => {
    const patterns = [];
    const length = 3;
    const nextSquares = ["A", "B", "C", "F", "G", "H", "I"];
    const newLookup = {
      A: ["B", "F", "H"],
      B: ["A", "C", "F", "G", "I"],
      C: ["B", "F", "H"],
      F: ["A", "B", "C", "G", "H", "I"],
      G: ["B", "F", "H"],
      H: ["A", "C", "F", "G", "I"],
      I: ["B", "F", "H"],
    };
    recursivelyCreatePermutations(
      2,
      "DE",
      nextSquares,
      newLookup,
      patterns,
      length
    );
    expect(patterns).toContain("DEG");
  });
});

describe("countPatternsFrom", () => {
  test("pattern length of 0 returns 0 patterns", () => {
    expect(countPatternsFrom("A", 0)).toBe(0);
  });
  test("pattern length of more than the number of squares (9) returns 0 patterns", () => {
    expect(countPatternsFrom("C", 10)).toBe(0);
  });
  test("pattern length of 1 returns 1 pattern", () => {
    expect(countPatternsFrom("E", 1)).toBe(1);
  });
  test("pattern length of 2 returns 5 patterns for C", () => {
    expect(countPatternsFrom("C", 2)).toBe(5);
  });
  test("pattern length of 3 returns 37 patterns for D", () => {
    expect(countPatternsFrom("D", 3)).toBe(37);
  });
  test("pattern length of 4 returns 256 patterns for E", () => {
    expect(countPatternsFrom("E", 4)).toBe(256);
  });
  test("pattern length of 8 returns 23280 patterns for E", () => {
    expect(countPatternsFrom("E", 8)).toBe(23280);
  });
});
