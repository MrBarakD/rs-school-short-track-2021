/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const str = `${n}`;
  const arr = str.split('');
  const result = arr.reduce((acc, item) => {
    const sum = +acc;
    return +item + sum;
  });
  return (Math.floor(result / 10) >= 1) ? getSumOfDigits(result) : result;
}

module.exports = getSumOfDigits;
