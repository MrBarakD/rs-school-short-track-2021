/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return '';
  }
  const arr = str.split('');
  let counter = 1;
  const result = [];
  arr.reduce((accum, item, index, array) => {
    const char = accum;
    if (item === char) {
      counter += 1;
      if (index === array.length - 1) {
        if (counter > 1) {
          result.push(`${counter}${char}`);
        } else {
          result.push(`${char}`);
        }
      }
      return char;
    }
    if (counter > 1) {
      result.push(`${counter}${char}`);
    } else {
      result.push(`${char}`);
    }
    counter = 1;
    if (index === array.length - 1) {
      result.push(`${item}`);
    }
    return item;
  });
  return result.join('');
}

module.exports = encodeLine;
