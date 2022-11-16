/*

1. What is difference between Function Declaration and Function Expression?

Ans) in a function expression the function declared is assigned to a variable and this variable can be used to call the function

    ex;-> var greet = function(){console.log('hello!')}

    whereas in function declaration a function is given name with parameters 
    function greet(){console.log('hello!')}

    function declarations are hoisted whereas function expressions are not hoisted

*/

/*


2. Write down the syntax rules of an Arrow function.

Ans) var arrow_function = (parameters) => {
        body
    };

    we can also simplify arrow function using 
    var simplified_arrow_function = parameter => evaluating_expression_of_result;

*/


// 3. Using Function Declaration create a function which will add two numbers.
function add_two_numbers(num1,num2){
    return num1+num2;
}

// 4. Using Function Expression create a function which will multiply two numbers.
const multiply_two_numbers = function(num1,num2){
    return num1*num2;
}


// 5. Using Arrow Function create a function to subtract two numbers.
const subtract_two_numbers = (num1,num2)=>{
    return num1-num2;
}


// 6. Create IIFE which will accept a string as argument and return the reversed string."
console.log((function(string){
    return string.split("").reverse().join("");
})("reverse"));

