// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    //Plan - ake number into string, into array

    const intArr = n.toString().split('');

    let reversedString = intArr.reduce((reversedStr, Char) => {

        return Char + reversedStr;
    }, '');

    let reversedInt = parseInt(reversedString);
    return reversedInt * Math.sign(n);
}

module.exports = reverseInt;

/*
const reversed = n.toString().split('').reverse().join('');
    console.log(parseInt(reversed));
    return parseInt(reversed) * Math.sign(n);
*/