const {
  genNextSquares,
  intitialLookup,
  countPatternsFrom,
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
      E: ["B", "C", "D", "F", "H", "I"],
      F: ["B", "C", "E", "G", "H", "I"],
      G: ["B", "D", "E", "F", "H"],
      H: ["C", "D", "E", "F", "G", "I"],
      I: ["B", "D", "E", "F", "H"],
    });
    expect(genNextSquares(intitialLookup, "B")[1]).toEqual({
      A: ["D", "E", "F", "H"],
      C: ["D", "E", "F", "H"],
      D: ["A", "C", "E", "G", "H", "I"],
      E: ["A", "C", "D", "F", "H", "I"],
      F: ["A", "C", "E", "G", "H", "I"],
      G: ["D", "E", "F", "H"],
      H: ["A", "C", "D", "E", "F", "G", "I"],
      I: ["D", "E", "F", "H"],
    });
    expect(genNextSquares(intitialLookup, "C")[1]).toEqual({
      A: ["B", "D", "E", "F", "H"],
      B: ["A", "D", "E", "F", "G", "I"],
      D: ["A", "B", "E", "G", "H", "I"],
      E: ["A", "B", "D", "F", "H", "I"],
      F: ["A", "B", "E", "G", "H", "I"],
      G: ["B", "D", "E", "F", "H"],
      H: ["A", "D", "E", "F", "G", "I"],
      I: ["B", "D", "E", "F", "H"],
    });
    expect(genNextSquares(intitialLookup, "D")[1]).toEqual({
      A: ["B", "E", "F", "H"],
      B: ["A", "C", "E", "F", "G", "I"],
      C: ["B", "E", "F", "H"],
      E: ["A", "B", "C", "F", "H", "I"],
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
      E: ["A", "B", "C", "D", "H", "I"],
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
      E: ["A", "B", "C", "D", "F", "I"],
      F: ["A", "B", "C", "E", "G", "I"],
      G: ["B", "D", "E", "F"],
      I: ["B", "D", "E", "F"],
    });
    expect(genNextSquares(intitialLookup, "I")[1]).toEqual({
      A: ["B", "D", "E", "F", "H"],
      B: ["A", "C", "D", "E", "F", "G"],
      C: ["B", "D", "E", "F", "H"],
      D: ["A", "B", "C", "E", "G", "H"],
      E: ["A", "B", "C", "D", "F", "H"],
      F: ["A", "B", "C", "E", "G", "H"],
      G: ["B", "D", "E", "F", "H"],
      H: ["A", "C", "D", "E", "F", "G"],
    });
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
});
