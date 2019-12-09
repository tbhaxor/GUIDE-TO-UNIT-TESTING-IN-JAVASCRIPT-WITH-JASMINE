/**
 * Addition of two numbers
 * @param {Number} x
 * @param {Number} y
 * @returns {Number} `x + y`
 */
function Add(x, y) {
  // safeguard
  if (typeof x == "string" || typeof y == "string") {
    return NaN;
  }

  // actual logic
  return x + y;
}

/**
 * Subtraction of two numbers
 * @param {Number} x
 * @param {Number} y
 * @returns {Number} `x - y`
 */
function Subtract(x, y) {
  // safeguard
  if (typeof x == "string" || typeof y == "string") {
    return NaN;
  }

  // actual logic
  return x - y;
}

/**
 * Multiplication of two numbers
 * @param {Number} x
 * @param {Number} y
 * @returns {Number} `x * y`
 */
function Multiply(x, y) {
  // safeguard
  if (typeof x == "string" || typeof y == "string") {
    return NaN;
  }

  // another safegaurd
  if (x == 0 || y == 0) {
    return 0;
  }

  // actual logic
  return x * y;
}

/**
 * Division of two numbers
 * @param {Number} x
 * @param {Number} y
 * @returns {Number} `x / y`
 */
function Divide(x, y) {
  // safeguard
  if (typeof x == "string" || typeof y == "string") {
    return NaN;
  }

  // actual logic
  return x / y;
}
