// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {


    let reduced = str.split('').reduce((reversedStr, character) => {
        return character + reversedStr;
    }, '');
    
    return reduced;

}
module.exports = reverse;

//helper heavy solution
/*
function reverse(str) {

    const arr = str.split(''); //split turns string into array of characters
    return arr.reverse().join('');
}

*/
//Solid solution
/*
    //Create array, ful of array of characters from the string
    let reversed="";
    str = str.split('');
    for(let value of str)
    {
        reversed = value + reversed;
    }
    return reversed;
*/