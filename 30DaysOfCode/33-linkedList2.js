

class Node {
    constructor(data,next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkeList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last
    insertLast(data) {
        let node = new Node(data);
        let current;

        //if empty, make head
        if (!this.head) {
            this.head = node;
        }else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    removeAt(index) {
        if (index > 0 && index > this.size) {
            return
        }

        let  current = this.head;
        let previous;
        let count = 0;
        //remove first
        if(index === 0){
            this.head = current.next
        }else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    removeDuplicates() {
        let current = this.head;
        let count = 0; 
        let noMoreDuplicatedItems = false;  

        if (!current) {
            return -1;
        }
        let previous;
        while(current) {

            count++
            previous = current;
            current = current.next;
            if (current === null) {
                if (noMoreDuplicatedItems === false) {
                    return
                }else {
                    this.removeDuplicates();
                }
            }else if (previous.data === current.data) {
                noMoreDuplicatedItems=true;
                this.removeAt(count-1);
            }

        }

    }
}

const ll = new LinkeList();

ll.insertFirst(1);
ll.insertLast(1);
ll.insertLast(1);
ll.insertLast(1);
ll.insertLast(1);
ll.insertLast(1);
ll.insertLast(1);
// ll.insertLast(1);
// ll.removeAt(5);
ll.removeDuplicates();
ll.printListData();