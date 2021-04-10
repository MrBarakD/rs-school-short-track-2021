/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const mixer = (array) => {
    const pale = [];
    let str = '';
    array.forEach((item) => {
      str += `.${item}`;
      pale.push(str);
    });
    return pale;
  };
  const arr = domains.map((item) => item.split('.').reverse());
  const pale = arr.reduce((accum, item) => {
    const result = accum;
    return result.concat(mixer(item));
  }, []).sort();
  const state = {};
  let counter = 1;
  let indx = 0;
  pale.forEach((item, index, array) => {
    if (index < indx) {
      return;
    }
    const lastIndex = array.lastIndexOf(item);
    if (index === lastIndex) {
      state[`${item}`] = 1;
      return;
    }
    counter = lastIndex - index + 1;
    state[`${item}`] = counter;
    indx = lastIndex + 1;
  });
  return state;
}

module.exports = getDNSStats;
