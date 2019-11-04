const capitalize = (word) => {
    let firstLetter = word[0];
    firstLetter = firstLetter.toUpperCase();
     word = word.slice(1, word.length);
    return firstLetter+word;
}

const reverseString = (word) => {
    let res= '';
    for(let i = word.length-1; i>=0 ; i--){
        res += word[i];
    }
    return res;
}

export {
    capitalize, reverseString
};