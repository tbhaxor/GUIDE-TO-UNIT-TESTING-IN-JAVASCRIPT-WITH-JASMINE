describe("Calculator Testing", () => {
  // ----------------
  // Addition Testing
  // ----------------
  it("should add two positive numbers", () => {
    expect(Add(2, 3)).toEqual(5);
  });
  it("should add two numbers with different sign", () => {
    expect(Add(2, -3)).toEqual(-1);
  });
  it("should add two negative numbers", () => {
    expect(Add(-2, -3)).toEqual(-5);
  });
  it("should return Nan if either of parameter is string", () => {
    expect(Add(2, "3")).toEqual(NaN);
  });

  // ----------------
  // Subtraction Testing
  // ----------------
  it("should subtract two positive numbers", () => {
    expect(Subtract(2, 3)).toEqual(-1);
  });
  it("should subtract two numbers with different sign", () => {
    expect(Subtract(2, -3)).toEqual(5);
  });
  it("should subtract two negative numbers", () => {
    expect(Subtract(-2, -3)).toEqual(1);
  });
  it("should return Nan if either of parameter is string", () => {
    expect(Subtract(2, "0")).toEqual(NaN);
  });

  // ----------------
  // Multiplication Testing
  // ----------------
  it("should multiply two positive numbers", () => {
    expect(Multiply(2, 3)).toEqual(6);
  });
  it("should multiply two numbers with different sign", () => {
    expect(Multiply(2, -3)).toEqual(-6);
  });
  it("should multiply two negative numbers", () => {
    expect(Multiply(-2, -3)).toEqual(6);
  });
  it("should return 0 when multiplied by 0", () => {
    expect(Multiply(-2, 0)).toEqual(0);
  });
  it("should return Nan if either of parameter is string", () => {
    expect(Multiply(-2, "-3")).toEqual(NaN);
  });

  // ----------------
  // Division Testing
  // ----------------
  it("should divide two positive numbers", () => {
    expect(Divide(4, 2)).toEqual(2);
  });
  it("should divide two numbers with different sign", () => {
    expect(Divide(4, -2)).toEqual(-2);
  });
  it("should divide two negative numbers", () => {
    expect(Divide(-4, -2)).toEqual(2);
  });
  it("should return Nan if either of parameter is string", () => {
    expect(Divide(4, "2")).toEqual(NaN);
  });
  it("should return Nan if denomitor is 0", () => {
    expect(Divide(4, 0)).toEqual(Infinity);
  });
});
