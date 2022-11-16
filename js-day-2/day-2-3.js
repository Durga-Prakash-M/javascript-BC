
//1. Use map function to return the squares of the items in the below array [2, 4, 6, 8, 10].
let arr = [2,4,6,8,10];
sqaures = arr.map(x=>x*x);
console.log(sqaures);


//2. Use filter function array to extract strings from the below array  [1, ""two"", 3, ""four"", 5, ""Six"", 7, ""Eight"", 9, ""Ten""].

arr = [1, "two", 3, "four", 5, "Six", 7, "Eight", 9, "Ten"];
strings = arr.filter(x=>typeof x==='string');
console.log(strings);


//3. What are arguments of the reduce function. Use reduce function to return the sum of the items in the array [1, 3, 5, 7, 9].

arr = [1, 3, 5, 7, 9];
reducedArraySum = arr.reduce((a,b)=>a+b);
console.log(reducedArraySum);

