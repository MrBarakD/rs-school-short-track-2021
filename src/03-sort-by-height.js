/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // const indexArr = [];
  // const filteredArr = arr.filter((item, index) => {
  //   if (item === -1) indexArr.push(index);

  //   return item !== -1;
  // });
  // filteredArr.sort((a, b) => a - b);
  // return arr.reduceRight((accum, item, index) => {
  //   console.log(item);
  //   const resultArr = accum;
  //   if (indexArr.includes(index)) {
  //     resultArr.push(-1);
  //     return resultArr;
  //   }
  //   resultArr.push(filteredArr.pop());
  //   return resultArr;
  // }, []).reverse();
  const array = [...arr];
  const n = array.length;
  for (let i = 0; i < n - 1; i += 1) {
    if (array[i] !== -1) {
      let min = i;
      for (let j = i + 1; j < n; j += 1) {
        if (array[j] < array[min] && array[j] !== -1) {
          min = j;
        }
      }
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

module.exports = sortByHeight;
