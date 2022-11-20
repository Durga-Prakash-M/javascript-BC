//1. Write a function which takes an object as input and print out its properties
function printProperites(obj){
    for(let key in obj){
        console.log(key+":"+obj[key]);
    }
}

obj = {
    name:'MDP',
    course: 'CSE'
};

printProperites(obj);

//2. How to delete property 'a' from object x={'a':1,'b':2}
// using delete keyword
let x = {'a':1,'b':2}
delete x.a;
console.log(x)


//3. Given x = {a:'1'}; y = x; does changing y.a change x.a? why? (looking for the answer - objects are pass by reference)

// answer yes changing y.a changes x.a as y is also assigned the reference of x



//4. Copy x = {'a':1} to a variable y without creating a reference to x

x = {'a':1}
y = {...x}
console.log(y);

//5. Write a function to check if two objects are equal
function checkEquality(obj1,obj2){
    for(let key in obj1){
        if(!key in obj2 || obj1[key]!=obj2[key]){
            return false;
        }
    }
    return true;
}

a = {a:1,b:2}
b = {a:1,b:3}
console.log(checkEquality(a,b));