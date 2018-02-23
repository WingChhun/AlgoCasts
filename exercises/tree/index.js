// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    //accept data, initialize array for children
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        //createa a new node, 
        //add it to current nodes children array

        this.children.push(new Node(data));
    }
    remove(data) {
        //search each child element of current node
        //as soon as we find node with data, remove that node entierly
        //Use filter helper, and return every child where the data is not equal to the data passed
        this.children = this.children.filter((child) => {
            return child.data !== data;
        });
    }
}

class Tree {
    constructor() {
        //assign a root/head to our tree
        this.root = null;
    }
    traverseBF(fn) {
        //user passes in a function
        //traverse using Breadth-First Search
        const arr = [this.root];
        //loop while have length
        //remove first element of array
        //take every child node out of array
        while (arr.length) {
            const node = arr.shift();
            for (let child of node.children) {
                arr.push(child);
            }
            fn(node);
            //arr.push(...node.children];)
        }

    }
    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }
}

/*
Implementation example

const node = new Node(1);
const tree = new Tree();
tree.root = node;
*/
module.exports = {
    Tree,
    Node
};