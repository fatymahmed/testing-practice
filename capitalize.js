const capitalize = (word) => {
    let firstLetter = word[0];
    firstLetter = firstLetter.toUpperCase();
     word = word.slice(1, word.length);
    return firstLetter+word;
}

module.exports = capitalize;