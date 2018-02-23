// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//assume array of numbers sort frmo least to greatest

/*
In bubble sort, this has a runtime complexity of n^2, it is REALLY INEFFICIENT, for larger lengths of arrays
 - So we loop through each element, and compare it to every other element in the array,
 - Swap if lesser,
 -After exiting inner loop, we run it again, 
*/
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

/*
Selection sort,
   -We assume the index of the minimum value is index of 0
   //We loop through the array, and compare it to every other
   //If our prediction indexOfMin is false, we swap element with the value of the arr[indexOfMin]
*/
function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        //we assume we are at the min value
        let indexOfMin = i; //i think this si the lowest value in teh array
        for (let j = i + 1; j < arr.length; j++) {
            //loop through, if smaller then that is the new index of min
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        //if our assumptino si wrong, we switch the values
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i]
            arr[i] = lesser;
        }
    }
    return arr;
}

/*
Merge sort, runtime complexity of n * log(n),
	-More difficult because uses recursion
  - We split the array in half,
  -We keep splitting the sub arrays in half, sort the chunks, then merge them backtogether,
  		-this is faster because we have already sorted each chunk and we eventually merge all these sorted chunks into a final sorted array
*/
function mergeSort(arr) {
    //recursion involved
    //check if array has 1 element inside
    if (arr.length === 1) {
        return arr;
    }
    const center = Math.floor(arr.length / 2); //retrieve center
    //split arrays
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    //recursively subdivide
    return merge(mergeSort(left), mergeSort(right));


}
/*
merge - purpose
 - get two separate sorted arrays of values
  - create empty array called results
  -merge values into results
*/
function merge(left, right) {
    //no recursion, iterative code
    const results = [];
    while (left.length && right.length) {
        //copare element of first elements in both arrays
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            //if rightside is less than left
            results.push(right.shift());
        }
    }
    //es2016 syntax
    //creates a new empty array, take results, add left add right
    //this si the same as concat
    //return results.concat(left).concat(right);
    return [...results, ...left, ...right];
}

module.exports = {
    bubbleSort,
    selectionSort,
    mergeSort
};