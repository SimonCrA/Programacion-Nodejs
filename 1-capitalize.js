function capitalize(word) {
    let firstLetter = word.charAt(0).toUpperCase();
    let remainingLetters = word.substring(1).toLowerCase();
    let finalWord = firstLetter.concat(remainingLetters);
    return finalWord;
}

console.log(capitalize("maria"));
console.log(capitalize("pEDRO"));
console.log(capitalize("peTroNilA"));
