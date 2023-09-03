// Time complexity of log n so not that bad.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (value === current.value)
                return undefined;

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            }

            if (value > current.value) {

                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;


            }
        }

    }

    find(value) {
        if (this.root === null) return false;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            }

            if (value > current.value) {
                current = current.right;
            }

            if (value === current.value) {
                found = true;
            }


        }

        if (!found) return undefined
        return current;
    }

    searchBFS() {
        if (this.root === null)
            return undefined;

        const queue = [this.root];
        const visited = [];

        let pickedNode;

        while (queue.length !== 0) {
            pickedNode = queue.shift();

            if (pickedNode.left) {
                queue.push(pickedNode.left);
            }

            if (pickedNode.right) {
                queue.push(pickedNode.right)
            }

            visited.push(pickedNode.value);
        }

        return visited;
    }

    DFSPreOrder() {
        var data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);  /// All Left sides will be traversed first 
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}
function createBST(values) {
    let bst = new BinarySearchTree();
    values.forEach(val => {
        bst.insert(val);
    });
    return bst;
}

function printBST(list) {
    let current = list.head;
    while (current) { // while not null
        console.log(current.val);
        current = current.next;
    }
}

function BSTMethods() {
    let bst = createBST([5, 9, 45, 91, 34, 2, 89, 78, 34]);

    // console.log(bst.searchBFS());

    console.log(bst.DFSPreOrder())
}


module.exports = BSTMethods;