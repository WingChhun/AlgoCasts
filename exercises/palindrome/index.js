// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    //ES helper classes split and reduce
    let strReversed = str.split('').reduce((reversed, char) => {
        return char + reversed;
    }, '');
    if (strReversed == str) {
        return true;
    } else {
        return false;
    }
    /*
    Solution using a lot of Javascript helper functions
    */
    let strReversed2 = str.split('').reverse().join('');

if (str == strReversed2) {
        return true;
    } else {
        return false;
    }

    // Solution using for loop, ES15 syntax
    let strReversed3 = "";
    //For loop, using ES15 syntax, reverse the string 
    for (let character of str) {
        strReversed3 = character + strReversed3;
    }
    //Now compare
    if (strReversed3 == str) {
        return true;
    } else {
        return false;
    }

}

module.exports = palindrome;