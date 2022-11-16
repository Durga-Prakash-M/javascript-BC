/*


3. Breifly explain the below Array methods with examples
shift, unshit, slice, splice, pop
*/

//1. Is array passed by value or reference to a function. Justify your answer with an example.
// array is passed by referenced

function popArray(arr){
    arr.pop();
}
let arr = [1,2,3];
popArray(arr);
console.log(arr);

//2. Write a Javascript function to clone an array without using loops.
// using slice() method of the javascript arrays we can clone the array without using the loops
let arr1 = arr.slice()
console.log(arr1)
arr1.pop();
console.log(arr1,arr);

//3. Breifly explain the below Array methods with examples
//shift, unshit, slice, splice, pop
/*
shift -> removes the first element of the array and returns it.
unshift -> adds the start of the array
slice -> clones the array or part of the array if parameters are passed.
splice -> splice(start,deleteCount,items)
            deletes the elements from start index.
            deleteCount is specifies how many elements to be deleted. by default it is 1.
            items represent the elements to be added in place of deleted elements.
            it returns the array of deleted items.
pop -> deletes the elements from the last of the array and returns it.
*/

