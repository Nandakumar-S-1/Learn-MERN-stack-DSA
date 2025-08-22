class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    // A helper method to find a node by its value
    findNode(value, node = this.root) {
        if (!node) {
            return null;
        }
        if (node.value === value) {
            return node;
        }
        for (let child of node.children) {
            const found = this.findNode(value, child);
            if (found) {
                return found;
            }
        }
        return null;
    }

    insert(value, parentValue = null) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            const parentNode = this.findNode(parentValue);
            if (parentNode) {
                parentNode.children.push(node);
            } else {
                console.log(`Parent with value ${parentValue} not found.`);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            for (let child of root.children) {
                this.preOrder(child);
            }
        }
    }

    postOrder(root) {
        if (root) {
            for (let child of root.children) {
                this.postOrder(child);
            }
            console.log(root.value);
        }
    }

    BFS() {
        if (this.isEmpty()) {
            return;
        }

        const queue = [this.root];
        const result = [];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode.value);

            for (let child of currentNode.children) {
                queue.push(child);
            }
        }
        console.log("BFS Traversal:", result.join(', '));
    }
}

let tree = new Tree();
tree.insert(9); 
tree.insert(5, 9); 
tree.insert(7, 9); 
tree.insert(1, 5); 
tree.insert(3, 5);
tree.insert(10, 7); 

tree.BFS();