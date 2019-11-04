const alphabetArray = [];
for (let i = 0; i < 26; i += 1) {
  alphabetArray.push(String.fromCharCode(97 + i));
}

const isUpperCase = (chr) => chr === chr.toUpperCase();

const isAlphabet = (chr) => chr.match(/[a-zA-Z]/);

const encryptChar = (chr, offset) => {
  let index = alphabetArray.indexOf(chr.toLowerCase());
  index += offset;
  index %= alphabetArray.length;
  return alphabetArray[index];
};

const cipher = (word, offset) => {
  let result = '';
  for (let i = 0; i < word.length; i += 1) {
    if (isAlphabet(word[i])) {
      let isUpper = false;
      if (isUpperCase(word[i])) {
        isUpper = true;
      }
      const encr = encryptChar(word[i], offset);
      result += isUpper ? encr.toUpperCase() : encr;
    } else {
      result += word[i];
    }
  }
  return result;
};


export default cipher;
