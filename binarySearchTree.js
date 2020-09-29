

class Node {
    constructor(value) {
        this.value =  value;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode =  new Node(value);
        
        if(!this.root){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        let parent = current;
        if(current.value === value){
            return undefined;
        }
        while (1) {

            if(parent.value > value){
                current = parent;
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }else{
                    parent = current.left;
                };
            }else{
                current = parent;
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }else{
                    parent = current.right; 
                }
            }
        }
        
    
    }

    find(value){
        if(!this.root){
            return false
        }

        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else {
                found = current;
            }
        }

        if (!found) {
               return undefined; 
        }
        return found;
    }

    height(){
       return this.root; 
    }
}

let mybst = new BinarySearchTree();
console.log(mybst.insert(5));
console.log(mybst.insert(4));
console.log(mybst.insert(6));
console.log(mybst.insert(3));
console.log(mybst.insert(8));
console.log(mybst.insert(2));
console.log(mybst.insert(7));
console.log(mybst.find(3));
console.log(mybst.find(8));
console.log(mybst.find(2));
console.log(mybst.find(7));
console.log('Display height from here');
console.log(mybst.height());

