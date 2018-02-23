// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

    constructor(data) {

        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        //insertino into tree
        //use recursion, start root node, recursively go through tree
        if (data < this.data && this.left) {
            this.left.insert(data);
        }
        //If data < this.left, but this.left does not exist
        else if (data < this.data) {
            this.left = new Node(data);
        }

        //RHS, same logic
        else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
    contains(data) {
        /*
        - Base case, if data is the value passed, return the node
                -First case, if data less than value, go left recursively
                -Second case if data greater, go right receursively
                -Return null
        */
        if (this.data === data) {
            return this;
        }
        //recursion
        if (data < this.data && this.left) {
            return this.left.contains(data);
        } else if (data > this.data && this.right) {
            return this.right.contains(data);
        }
        return null;
    } //end contains
}

module.exports = Node;