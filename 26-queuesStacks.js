

class Queue {
    constructor(){
        this.storage = [];
    }

    enqueue(item){
        this.storage.push(item);
    }

    dequeue(){
        let item = this.storage[0];
        this.storage.shift();
        return item;
    }
}

class Stack {
    constructor(){
        this.storage = {};
        this.size = 0;
    }

    push(item){
        this.storage[this.size] = item;
        this.size++;
    }

    pop(){
        let item = this.storage[this.size-1];
        delete this.storage[this.size-1];
        this.size--;
        return item;
    }

    peek(){
        return this.storage[this.size-1];
    }
}

let main = (wordIn) => {
let word = wordIn.toLowerCase();
let palindromeQueue = new Queue();
let palindromeStack = new Stack();
let counter = 0;
    let wordLength = word.length;
    for (let i = 0; i <wordLength; i++) {
        const chars = word.charAt(i);
        palindromeQueue.enqueue(chars);
        palindromeStack.push(chars)
        
    }

    for (let i = 0; i < wordLength; i++) {
        let charQueue = palindromeQueue.dequeue();
        let charStack = palindromeStack.pop();

        if (charQueue === charStack) {
            counter++;
        }
    }

    if (wordLength === counter) {
        console.log(`The word, ${word}, is a palindrome`);
    }else {
        console.log(`The word, ${word}, is not a palindrome`);

    }
    
}

const strIn = 'Anna';
main(strIn);