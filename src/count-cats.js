function countCats(arr) {
  let count = 0;
  for (const internalArr of arr) {
    for (const elem of internalArr) {
      if (elem === '^^') {
        count += 1;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};