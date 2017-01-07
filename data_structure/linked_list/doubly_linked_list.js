/*
 * Doubly Linked List
 * https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
 */

// define a constructor named Node
 function Node(value) {
    this.data = value; // stores a value.
    this.previous = null; // points to the previous node in the list.
    this.next = null; // points to the next node in the list.
}
 
// define a constructor named DoublyList
function DoublyList() {
    this._length = 0; // retrieves the number of nodes in a list.
    this.head = null; // assigns a node as the head of a list.
    this.tail = null; // assigns a node as the tail of a list.
}
 
// the functionality to add nodes to a list.
DoublyList.prototype.add = function(value) {
    var node = new Node(value);
 
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
 
    this._length++;
 
    return node;
};
 
// the functionality to search for nodes at specific positions in our list.
DoublyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};

// the functionality to remove a node at specific positions in our list.
DoublyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
 
        // 2nd use-case: there is a second node
        if (!this.head) {
            this.head.previous = null;
        // 2nd use-case: there is no second node
        } else {
            this.tail = null;
        }
 
    // 3rd use-case: the last node is removed
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    // 4th use-case: a middle node is removed
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
 
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;
 
        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }
 
    this._length--;
 
    return message.success;
};

var list = new DoublyList();
list.add(1)
list.add(2)
list.add(3)
console.log(list);
console.log(list.searchNodeAt(3));
list.remove(2)
console.log(list.head);

// [nodemon] starting `node doubly_linked_list.js`
// DoublyList {
//   _length: 3,
//   head:
//    Node {
//      data: 1,
//      previous: null,
//      next: Node { data: 2, previous: [Circular], next: [Object] } },
//   tail:
//    Node {
//      data: 3,
//      previous: Node { data: 2, previous: [Object], next: [Circular] },
//      next: null } }
// Node {
//   data: 3,
//   previous:
//    Node {
//      data: 2,
//      previous: Node { data: 1, previous: null, next: [Circular] },
//      next: [Circular] },
//   next: null }
// Node {
//   data: 1,
//   previous: null,
//   next: Node { data: 3, previous: [Circular], next: null } }
// [nodemon] clean exit - waiting for changes before restart