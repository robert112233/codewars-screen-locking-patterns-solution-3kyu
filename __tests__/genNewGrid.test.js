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
      B: ["C", "D", "E", "F", "G", "I"],
      C: ["B", "D", "E", "F", "H"],
      D: ["B", "C", "E", "G", "H", "I"],
      E: ["B", "C", "D", "F", "G", "H", "I"],
      F: ["B", "C", "E", "G", "H", "I"],
      G: ["B", "D", "E", "F", "H"],
      H: ["C", "D", "E", "F", "G", "I"],
      I: ["B", "D", "E", "F", "H"],
    });
    expect(genNextSquares(intitialLookup, "B")[1]).toEqual({
      A: ["D", "E", "F", "H"],
      C: ["D", "E", "F", "H"],
      D: ["A", "C", "E", "G", "H", "I"],
      E: ["A", "C", "D", "F", "G", "H", "I"],
      F: ["A", "C", "E", "G", "H", "I"],
      G: ["D", "E", "F", "H"],
      H: ["A", "C", "D", "E", "F", "G", "I"],
      I: ["D", "E", "F", "H"],
    });
    expect(genNextSquares(intitialLookup, "C")[1]).toEqual({
      A: ["B", "D", "E", "F", "H"],
      B: ["A", "D", "E", "F", "G", "I"],
      D: ["A", "B", "E", "G", "H", "I"],
      E: ["A", "B", "D", "F", "G", "H", "I"],
      F: ["A", "B", "E", "G", "H", "I"],
      G: ["B", "D", "E", "F", "H"],
      H: ["A", "D", "E", "F", "G", "I"],
      I: ["B", "D", "E", "F", "H"],
    });
    expect(genNextSquares(intitialLookup, "D")[1]).toEqual({
      A: ["B", "E", "F", "H"],
      B: ["A", "C", "E", "F", "G", "I"],
      C: ["B", "E", "F", "H"],
      E: ["A", "B", "C", "F", "G", "H", "I"],
      F: ["A", "B", "C", "E", "G", "H", "I"],
      G: ["B", "E", "F", "H"],
      H: ["A", "C", "E", "F", "G", "I"],
      I: ["B", "E", "F", "H"],
    });
    expect(genNextSquares(intitialLookup, "E")[1]).toEqual({
      A: ["B", "D", "F", "H"],
      B: ["A", "C", "D", "F", "G", "I"],
      C: ["B", "D", "F", "H"],
      D: ["A", "B", "C", "G", "H", "I"],
      F: ["A", "B", "C", "G", "H", "I"],
      G: ["B", "D", "F", "H"],
      H: ["A", "C", "D", "F", "G", "I"],
      I: ["B", "D", "F", "H"],
    });
    expect(genNextSquares(intitialLookup, "F")[1]).toEqual({
      A: ["B", "D", "E", "H"],
      B: ["A", "C", "D", "E", "G", "I"],
      C: ["B", "D", "E", "H"],
      D: ["A", "B", "C", "E", "G", "H", "I"],
      E: ["A", "B", "C", "D", "G", "H", "I"],
      G: ["B", "D", "E", "H"],
      H: ["A", "C", "D", "E", "G", "I"],
      I: ["B", "D", "E", "H"],
    });
    expect(genNextSquares(intitialLookup, "G")[1]).toEqual({
      A: ["B", "D", "E", "F", "H"],
      B: ["A", "C", "D", "E", "F", "I"],
      C: ["B", "D", "E", "F", "H"],
      D: ["A", "B", "C", "E", "H", "I"],
      E: ["A", "B", "C", "D", "F", "H", "I"],
      F: ["A", "B", "C", "E", "H", "I"],
      H: ["A", "C", "D", "E", "F", "I"],
      I: ["B", "D", "E", "F", "H"],
    });
    expect(genNextSquares(intitialLookup, "H")[1]).toEqual({
      A: ["B", "D", "E", "F"],
      B: ["A", "C", "D", "E", "F", "G", "I"],
      C: ["B", "D", "E", "F"],
      D: ["A", "B", "C", "E", "G", "I"],
      E: ["A", "B", "C", "D", "F", "G", "I"],
      F: ["A", "B", "C", "E", "G", "I"],
      G: ["B", "D", "E", "F"],
      I: ["B", "D", "E", "F"],
    });
    expect(genNextSquares(intitialLookup, "I")[1]).toEqual({
      A: ["B", "D", "E", "F", "H"],
      B: ["A", "C", "D", "E", "F", "G"],
      C: ["B", "D", "E", "F", "H"],
      D: ["A", "B", "C", "E", "G", "H"],
      E: ["A", "B", "C", "D", "F", "G", "H"],
      F: ["A", "B", "C", "E", "G", "H"],
      G: ["B", "D", "E", "F", "H"],
      H: ["A", "C", "D", "E", "F", "G"],
    });
  });
  test("hidden squares are included if blocking squares have already been accessed", () => {
    const partialLookup1 = {
      A: ["D", "E", "H"],
      C: ["D", "E", "H"],
      D: ["A", "C", "E", "G", "H", "I"],
      E: ["A", "C", "D", "H", "I"],
      G: ["D", "E", "H"],
      H: ["A", "C", "D", "E", "G", "I"],
      I: ["D", "E", "H"],
    };
    expect(genNextSquares(partialLookup1, "C")[0]).toEqual([
      "A",
      "D",
      "E",
      "H",
      "I",
    ]);
    const partialLookup2 = {
      B: ["C", "D", "F", "G", "I"],
      C: ["B", "D", "F", "H"],
      D: ["B", "C", "G", "H", "I"],
      F: ["B", "C", "G", "H", "I"],
      G: ["B", "D", "F", "H"],
      H: ["C", "D", "F", "G", "I"],
      I: ["B", "D", "F", "H"],
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
      A: ["D", "H"],
      C: ["D", "H"],
      D: ["A", "C", "G", "H", "I"],
      G: ["D", "H"],
      H: ["A", "C", "D", "G", "I"],
      I: ["D", "H"],
    };
    expect(genNextSquares(partialLookup1, "H")[0]).toEqual([
      "A",
      "C",
      "D",
      "G",
      "I",
    ]);
    const partialLookup2 = {
      B: ["C", "E", "F", "G", "I"],
      C: ["B", "E", "F"],
      E: ["B", "C", "F", "I"],
      F: ["B", "C", "E", "G", "I"],
      G: ["B", "E", "F"],
      I: ["B", "E", "F"],
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
      A: ["D", "E", "H"],
      C: ["D", "E", "H"],
      D: ["A", "C", "E", "G", "H", "I"],
      E: ["A", "C", "D", "H", "I"],
      G: ["D", "E", "H"],
      H: ["A", "C", "D", "E", "G", "I"],
      I: ["D", "E", "H"],
    };
    expect(genNextSquares(partialLookup1, "C")[1]).toEqual({
      A: ["D", "E", "H"],
      D: ["A", "E", "G", "H", "I"],
      E: ["A", "D", "H", "I"],
      G: ["D", "E", "H"],
      H: ["A", "D", "E", "G", "I"],
      I: ["D", "E", "H"],
    });
    const partialLookup2 = {
      B: ["C", "E", "F", "G", "I"],
      C: ["B", "E", "F"],
      E: ["B", "C", "F", "I"],
      F: ["B", "C", "E", "G", "I"],
      G: ["B", "E", "F"],
      I: ["B", "E", "F"],
    };
    expect(genNextSquares(partialLookup2, "G")[1]).toEqual({
      B: ["C", "E", "F", "I"],
      C: ["B", "E", "F"],
      E: ["B", "C", "F", "I"],
      F: ["B", "C", "E", "I"],
      I: ["B", "E", "F"],
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
  test.only("pattern length of 3 returns 37 patterns for D", () => {
    expect(countPatternsFrom("D", 3)).toBe(37);
  });
  test("pattern length of 4 returns 256 patterns for E", () => {
    expect(countPatternsFrom("E", 4)).toBe(256);
  });
  test.skip("pattern length of 8 returns 256 patterns for E", () => {
    expect(countPatternsFrom("E", 8)).toBe(23280);
  });
});
