const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const newWord = word.slice(1, word.length);
  return firstLetter + newWord;
};

const reverseString = (word) => {
  let res = '';
  for (let i = word.length - 1; i >= 0; i -= 1) {
    res += word[i];
  }
  return res;
};

export {
  capitalize, reverseString,
};
