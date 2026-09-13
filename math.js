/**
 * Cantor Pairing Function for Rational Numbers (Numerator / Denominator)
 * 
 * Maps a rational number represented by (numerator, denominator) to a unique natural number.
 * 
 * - Numerator (a): An integer (positive, negative, or zero).
 *   Mapped to k1:
 *     - If a > 0: k1 = 2 * a
 *     - If a < 0: k1 = -2 * a + 1
 *     - If a = 0: k1 = 0
 * 
 * - Denominator (b): A natural number (positive integer >= 1).
 *   Mapped to k2:
 *     - k2 = b - 1
 * 
 * - Cantor Pairing Formula:
 *   π(k1, k2) = ((k1 + k2) * (k1 + k2 + 1)) / 2 + k2
 */

/**
 * Computes a unique natural number from a numerator and denominator
 * using the Cantor pairing function.
 *
 * @param {number} numerator - A positive or negative integer (numerator, a).
 * @param {number} denominator - A natural number (denominator, b >= 1).
 * @returns {number} A unique natural number.
 */
function cantorPair(numerator, denominator) {
  if (!Number.isInteger(numerator)) {
    throw new TypeError("Numerator must be an integer.");
  }
  if (!Number.isInteger(denominator) || denominator < 1) {
    throw new RangeError("Denominator must be a natural number (integer >= 1).");
  }

  const a = numerator;
  const b = denominator;

  // Transform numerator: 2a if a > 0, -2a + 1 if a < 0, 0 if a === 0
  let k1;
  if (a > 0) {
    k1 = 2 * a;
  } else if (a < 0) {
    k1 = -2 * a + 1;
  } else {
    k1 = 0;
  }

  // Transform denominator: b - 1
  const k2 = b - 1;

  // Cantor pairing function: π(k1, k2) = ((k1 + k2) * (k1 + k2 + 1)) / 2 + k2
  return ((k1 + k2) * (k1 + k2 + 1)) / 2 + k2;
}

/**
 * Inverses the Cantor pairing function to recover the original numerator and denominator.
 *
 * @param {number} z - The paired natural number.
 * @returns {{ numerator: number, denominator: number }} The original numerator and denominator.
 */
function cantorUnpair(z) {
  if (!Number.isInteger(z) || z < 0) {
    throw new RangeError("Input must be a non-negative integer.");
  }

  // Find w = floor((sqrt(8z + 1) - 1) / 2)
  const w = Math.floor((Math.sqrt(8 * z + 1) - 1) / 2);
  const t = (w * (w + 1)) / 2;
  const k2 = z - t;
  const k1 = w - k2;

  // Invert denominator: b = k2 + 1
  const denominator = k2 + 1;

  // Invert numerator
  let numerator;
  if (k1 === 0) {
    numerator = 0;
  } else if (k1 % 2 === 0) {
    numerator = k1 / 2;
  } else {
    // k1 = -2a + 1  =>  2a = 1 - k1  =>  a = (1 - k1) / 2
    numerator = (1 - k1) / 2;
  }

  return { numerator, denominator };
}

/**
 * Converts a paired natural number to its unary string representation.
 *
 * @param {number} n - Non-negative integer.
 * @param {string} [symbol='1'] - The symbol used to represent unary digits.
 * @returns {string} Unary string.
 */
function toUnary(n, symbol = '1') {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("Input must be a non-negative integer.");
  }
  return symbol.repeat(n);
}

// Export for Node.js environments and attach to global for browser environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = { cantorPair, cantorUnpair, toUnary };
}
if (typeof window !== "undefined") {
  window.cantorPair = cantorPair;
  window.cantorUnpair = cantorUnpair;
  window.toUnary = toUnary;
}
