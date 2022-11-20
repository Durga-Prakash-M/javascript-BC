
/*

1. Briefly explain different Promise states.
ans) different promise states are:
    a) pending -> the task is still being executed asynchronously.
    b) fulfilled with a response -> the task has been successfully executed returning a response.
    c) rejected for a reason -> the task has been rejected returing a reason.

*/

/*
2. Using promise to create a delayedLowerCase function which will transform a string to lower case after 5 seconds. Ex Input: ""BEAUTIFUL CODE"" Output: ""beautiful code""
*/

/*unction delayedLowerCase(str){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!true){
                resolve(str.toLowerCase());
            }
            else{
                reject('cannot conver to lowercase!');
            }
        },5000);
    })
}

delayedLowerCase("BEAUTIFUL CODE").then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});*/


/*
3. Briefly explain Promise Chaining. For the above created delayedLowerCase function chain a promise which will print the string and its length: Ex: Input: ""Beautiful Code""  Output: ""beautiful code - 14"""
*/

function delayedLowerCase1(str){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve(str.toLowerCase());
        },500);
    })
}

delayedLowerCase1("BEAUTIFUL CODE")
.then((response)=>{
    console.log(response);
    return response;
})
.then((response)=>{
    console.log(response.length);
});
