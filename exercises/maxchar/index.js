// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



function maxChar(str) {

    let max = 0;
    const newArr = {};
    str = str.split('');
    //build an object that counts number of characters in the string
    for (let char of str) {
        if (!(newArr[char])) {
            newArr[char] == 1;
        } else {
            newArr[char]++;
        }
    } //end for loop
    for(let value in newArr)
    {

    }

}

module.exports = maxChar;