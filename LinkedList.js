// * Reference https://www.geeksforgeeks.org/data-structures/linked-list
// ? Add feature: can connect to the previous node

// * create Linked List class
class linkedList {
    constructor(value) {
        this.data = value;
        this.next = null; // * this property is use for next node
        this.prev = null; // * same for this property but prev node
        this.end = true; // * set end for this node
    }
    // * create function that make next node connected to this node
    nextVal(val) {
        if (typeof val == "object") {
            val.prev = this;
            val.end = true;
            this.end = false;
            this.next = val;
        }
    }


}

// * this function is use for printing each node
function printNode(node) {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

let node1 = new linkedList(1);
let node2 = new linkedList(2);
let node3 = new linkedList(3);

node1.nextVal(node2);
node2.nextVal(node3);
printNode(node1);