/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(macAddress) {
  const arr = macAddress.split('-').filter((item) => {
    const n = parseInt(item, 16);
    if (Number.isNaN(n)) {
      return false;
    }
    return n >= 0 && n <= 255;
  });
  return arr.length === 6;
}

module.exports = isMAC48Address;
