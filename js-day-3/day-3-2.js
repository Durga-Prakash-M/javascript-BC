/*
"1. Implement Queue using javascript class. It should have the below methods
    * enqueue
    * dequeue
    * front
    * isEmpty
*/

class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(num){
        this.queue.push(num);
    }
    dequeue(){
        return this.queue[0];
    }
    front(){
        if(!this.isEmpty())
            return queue[0];
    }
    isEmpty(){
        return this.queue.length===0;
    }
    display(){
        console.log(this.queue);
    }
}

let q1 = new Queue();
q1.display();
q1.enqueue(1);
q1.enqueue(2);
q1.display();
console.log(q1.dequeue());
console.log(q1.isEmpty());



//2. Explain instanceOf operator with an example."
// the instanceof operator returns true if the prototype of a constructor appears in the chain of Object.

function Person(name){
    this.name = name;
}

let p1 = new Person('MDP');
console.log(p1 instanceof Person);
console.log(p1 instanceof Object);