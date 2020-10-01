// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };

    
    // Start of function levelOrder
    this.levelOrder = function(root) {

        let queue = new Queue();
        let strOut = ''
        if(root === null){
            return 0
        }else {
            let arr = [root];
            for (const current of arr) {
                if (current) {
                    strOut += current.data + ' ';
                    arr.push(current.left);
                    arr.push(current.right);
                    
                }
            }
            console.log(strOut);
        }

    };
}

// funcion de entrada
let main = (strIn) => {
    let tree = new BinarySearchTree();
    let root = null;
    let splitted = strIn.split('\n');
    let dataLength = splitted[0];
    for (let i = 1; i <= dataLength; i++) {
        
        root = tree.insert(root, splitted[i]);
    }
    // console.log(root);
    tree.levelOrder(root);

}
const strIn = `6
3
5
4
7
2
1`


main(strIn);