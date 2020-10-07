
class Node {
    constructor (data){
        this.data = data;
        this.next = null;
    }
};

class LinkedList {
    constructor(){
        this.head = null;
    }

    insert(head, data){
        this.head = head;
        let node = new Node(data);
        let current;

        //if empty, make head
        if(!this.head){
            this.head = node;
            return this.head;
        }else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        return this.head;
    }

    display(){
        let current = this.head;
        let strOut = '';
        while(current) {
            strOut += `${current.data} `;
            current = current.next;
        }
        console.log(strOut);
    }

}

let main = () => {
    //data format, primer numero indica cuantos datos llegarán, 
    let strIn = '4 2 3 4 1';
    let strArr = strIn.split(' ');
    let num = parseInt(strArr[0]);

    let head = null;
    let list = new LinkedList();

    for(let i=1; i<=num; i++){
        let data = parseInt(strArr[i]);
        head = list.insert(head,data);
    }
    list.display(head);
};

main();