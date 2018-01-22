// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

let min;

function maxChar(str) {

    //variables
    const charMap = {}; //empty object
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {

            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    } // end for loop
    console.log(charMap);

    //Now need to iterate through object charMpa, find max value

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    //TEST OUTPUT
    console.log(max);
    console.log(maxChar);
    //RETURN MOST COMMON CHARACTER
    return maxChar;
}

module.exports = maxChar;
return min;