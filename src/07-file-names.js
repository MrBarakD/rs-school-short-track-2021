/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return [];
  const resultArr = [...names];
  const itemArr = [];
  const indexArr = [];
  for (let i = 0; i < names.length; i += 1) {
    if (!itemArr.includes(names[i])) {
      itemArr.push(names[i]);
      indexArr.push([i]);
      for (let j = i + 1; j < names.length; j += 1) {
        if (names[i] === names[j]) {
          indexArr[itemArr.indexOf(names[j])].push(j);
        }
      }
    }
  }
  let marker = 0;
  itemArr.forEach((item, index) => {
    const array = indexArr[index];
    if (marker < array.length) {
      marker = array.length;
    }
    array.forEach((el, i) => {
      if (i === 0) {
        resultArr[el] = item;
      } else {
        resultArr[el] = `${item}(${i})`;
      }
    });
  });
  return marker !== 1 ? renameFiles(resultArr) : resultArr;
}

module.exports = renameFiles;
