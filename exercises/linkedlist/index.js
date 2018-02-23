// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;
        //while node.next != NULL,
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        //return the first node
        return this.head;
    }

    getLast() {
        //if list is empty, return null
        if (!this.head) {
            return null;
        }

        //create a temp node tha tpoints to head
        //use this node to traverse the list
        //If there is no net node, we are at the last node, return it
        let node = this.head;
        while (node) {
            if (!node.next) {

                return node;
            }
            node = node.next;
        }
    }

    clear() {
        //empty the list, in C++ pointers memory leakage
        this.head = null;
    }

    removeFirst() {
        //if no linked lsit

        if (!this.head) {
            return;
        }
        //Change the head pointer to the next
        this.head = this.head.next;
    }

    removeLast() {
        //we need to pop the last node from the list
        //if list is empty to begin with
        if (!this.head) {

            return;
        }
        //If we only have a head node, then we set it to null, because it is the last node

        if (!this.head.next) {
            this.head = null;
            return;
        }

        //create temp nodes to traverse the linked list
        //iterate to the last two nodes in the list

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        //node points to the last

        //now remove the previous pointer point to null
        //successfully removed the last
        previous.next = null;
    }

    insertLast(data) {
        //Can directly grab the last node using our getLast function()
        //Last.next should be pointing to NULL to begin with
        //B/c of this, we cna set the .next toa  new node that will now be the end
        const last = this.getLast();

        //get the last node, and insert data there
        // There are some existing nodes in our chain
        // ELSE - The chain is empty!
        if (last) {
            last.next = new Node(data);
        } else {

            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head; //temp node
        while (node) {
            if (counter === index) {
                return node; //return the temp node
            }
            counter++; //increment

            node = node.next; //point to next, traverse the list
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            //if no linked list to begin with
            return;
        }

        if (index === 0) {
            //remove the head node, so we point to the next
            this.head = this.head.next;
            return;
        }

        //temp node previous
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            //handles the case that, previous is NULL
            //OR if previous.next is NULL
            //In other words, our method does not support the index, LL may be too short, or we are at the end
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        //if no linked list
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        //if we want to insert at first
        //new node is the new head, points to the previous head

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        //get the node before required inserion
        //create new Node, points to the element to be inserted
        //previous's next node is now the new node, we have inserted the node at a specificl element

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    //Create a poiner symbol
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = {
    Node,
    LinkedList
};