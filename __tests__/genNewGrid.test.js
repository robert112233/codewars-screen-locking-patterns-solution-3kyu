const { genNextSquares } = require("../index");

describe("genNextSquares", () => {
  test("returns squares with no bridging logic in place", () => {
    expect(genNextSquares("A")).toEqual(["B", "D", "E", "F", "H"]);
    expect(genNextSquares("B")).toEqual(["A", "C", "D", "E", "F", "G", "I"]);
    expect(genNextSquares("C")).toEqual(["B", "D", "E", "F", "H"]);
    expect(genNextSquares("D")).toEqual(["A", "B", "C", "E", "G", "H", "I"]);
    expect(genNextSquares("E")).toEqual(["A", "B", "C", "D", "F", "H", "I"]);
    expect(genNextSquares("F")).toEqual(["A", "B", "C", "E", "G", "H", "I"]);
    expect(genNextSquares("G")).toEqual(["B", "D", "E", "F", "H"]);
    expect(genNextSquares("H")).toEqual(["A", "C", "D", "E", "F", "G", "I"]);
    expect(genNextSquares("I")).toEqual(["B", "D", "E", "F", "H"]);
  });
});
