
//1. Write a condition that returns true for == but not === and explain why

// == checks if contents are same while === also checks for their type equivalence

console.log(5=='5')  //prints true
console.log(5==='5') //prints false



//2. Write a single if condition that returns true if x is greater than or equal to 10 and is even, or if x is less than 10 and is odd

var x = 8;
console.log((x>=10 && x%2==0) || (x<10 && x%2!=0));


//3. Use a ternary operator to assign 'odd' or 'even' to a variable called 'output' by checking if a variable 'x' is odd or even

const output = x%2==0?"even":"odd";


//4. Using if/else if/else write a program that takes an input x (1-7) and prints corresponding weekday (1-Sunday etc).  If input is invalid print invalid input.

var day = 1;
if(day===1){
    console.log('Sunday');
}
else if(day===2){
    console.log('Monday');
}
else if(day===3){
    console.log('Tuesday');
}
else if(day===4){
    console.log('Wednesday');
}
else if(day===5){
    console.log('Thursday');
}
else if(day===6){
    console.log('Friday');
}
else if(day===7){
    console.log('Saturday');
}
else{
console.log('invalid input');
}

//5. Solve question 4 using switch case

switch(day){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('invalid input');
        break;
}


