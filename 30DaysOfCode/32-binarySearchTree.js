

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

    getBST() {
        return this.root;
    }

    height(tree){
        let leftDepth = 0;
        let rightDepth = 0;
        if (tree === null) {
            return 0;
        }else {
            if(tree.left !== null){
            leftDepth = this.height(tree.left)+1;
            }
            if (tree.right !== null) {
                rightDepth = this.height(tree.right)+1;
            }
            return Math.max(leftDepth,rightDepth); 
        }
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
// console.log(mybst.find(3));
// console.log(mybst.find(8));
// console.log(mybst.find(2));
// console.log(mybst.find(7));
console.log('Display height from here');
let bst = mybst.getBST();
console.log(mybst.height(bst));

