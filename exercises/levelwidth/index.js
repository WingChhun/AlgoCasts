// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {

    //Use Bread first traversal

    const counters = [0];
    const arr = [root, 's'];

    //iterate as long as there is more than one in array
    while (arr.length > 1) {
        const node = arr.shift();
        //case, we pull 's'
        if (node === 's') {
            //push new row
            //put back in array
            counters.push(0);
            arr.push('s');
        } else {
            //push children into array
            //increment the last element in the counter array
            arr.push(...node.children);
            counters[counter.length - 1]++;
        }
    } //end while

    return counters;

}

module.exports = levelWidth;