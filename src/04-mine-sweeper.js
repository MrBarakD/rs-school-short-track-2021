/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultArr = matrix.map((item, index, arr) => {
    const innerResult = item.map((innerItem, innerIndex, innerArr) => {
      if (innerItem === true) {
        return 1;
      }
      let count = 0;
      if (innerArr[innerIndex - 1] && innerArr[innerIndex - 1] === true) count += 1;
      if (innerArr[innerIndex + 1] && innerArr[innerIndex + 1] === true) count += 1;
      if (arr[index - 1]
        && arr[index - 1][innerIndex] === true) count += 1;
      if (arr[index + 1]
        && arr[index + 1][innerIndex] === true) count += 1;
      if (arr[index - 1]
        && arr[index - 1][innerIndex - 1] && arr[index - 1][innerIndex - 1] === true) count += 1;
      if (arr[index - 1]
        && arr[index - 1][innerIndex + 1] && arr[index - 1][innerIndex + 1] === true) count += 1;
      if (arr[index + 1]
        && arr[index + 1][innerIndex - 1] && arr[index + 1][innerIndex - 1] === true) count += 1;
      if (arr[index + 1]
        && arr[index + 1][innerIndex + 1] && arr[index + 1][innerIndex + 1] === true) count += 1;
      return count;
    });
    return innerResult;
  });
  return resultArr;
}

module.exports = minesweeper;
