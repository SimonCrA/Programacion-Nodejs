

function Stack() {
    this._size = 0;
    this._storage = {}
}

Stack.prototype.push = function(data) {
    //increases the size of our storage
    let size = this._size++;
    //assings size as a key of storage
    //assigns data as the value of this key
    this._storage[size] = data;
    return this._storage;
}

Stack.prototype.pop = function() {

    let size = this._size-1;
    let deletedData;
    if(size){
        deletedData = this._storage[size];
        delete this._storage[size];
        this._size--;
        return deletedData;
    }
}


function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {}
}

Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
}

Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++; 
    return this._storage;
}

Queue.prototype.dequeue = function() {
    let oldestIndex = this._oldestIndex;
    let newestIndex = this._newestIndex;

    if (oldestIndex !== newestIndex) {
        let deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
        return deletedData;
    }
}

let myStack = new Stack();
let myQueue = new Queue();

myStack.push(100);
myStack.push(200);
myStack.push(300);
console.log(myStack.push(400));

myQueue.enqueue(100)
myQueue.enqueue(200)
myQueue.enqueue(300)
console.log(myQueue.enqueue(400));

console.log(myStack.pop());
console.log(myQueue.size());
console.log(myQueue.dequeue());
console.log(myQueue.size());
