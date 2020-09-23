
//Queues
/**los Queues son FIFO lo que significa que el primer 
* elemento en entrar a la cola será el primer elemento
* en salir/ser removido de la cola
*/
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

const myqueue = new Queue();

myqueue.enqueue('cat');
myqueue.enqueue('dog');
// console.log(myqueue.dequeue());
// console.log(myqueue);


//Stacks
/** Los Stacks son LIFO lo que significa que el último
 *  elemento en entrar a la pila sera el primero en
 *  salir de la pila.
 */
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

const mystack = new Stack();

mystack.push('blue');
mystack.push('green');
mystack.push('red');
// console.log(mystack.pop())
// console.log(mystack.peek())
// console.log(mystack);



popCharacter = (chara) => {

    let lastChar = chara.charAt(chara.length-1)
    chara.substring(0, chara.length-1)
    return lastChar;
}
