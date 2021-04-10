/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = `${n}`;
  const arr = new Array(str.length).fill(0);
  // .map((item, index) => {
  //   console.log(item);
  //   const str1 = str.slice(0, index);
  //   const str2 = str.slice(index + 1);
  //   return +(str1 + str2);
  // });
  for (let i = 0; i < str.length; i++) {
    const str1 = str.slice(0, i);
    const str2 = str.slice(i + 1);
    arr[i] = +(str1 + str2);
  }
  return arr.reduce((accum, item) => {
    const max = accum;
    return (item - max) > 0 ? item : max;
  });
}

module.exports = deleteDigit;
