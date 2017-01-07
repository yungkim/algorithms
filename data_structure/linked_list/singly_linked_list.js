/*
 * Singliy Linked List
 * https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
 */

 // define a constructor named Node
 function Node(data) {
    this.data = data; // stores a value.
    this.next = null; // points to the next node in the list.
 }

// define a constructor named SinglyList
function SinglyList() {
    this._length = 0; // retrieves the number of nodes in a list.
    this.head = null; // assigns a node as the head of a list.
}

// the functionality to add nodes to a list.
SinglyList.prototype.add = function(value) {
    var node = new Node(value), currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    this._length++;

    return node;
};

// the functionality to search for nodes at specific positions in our list.
SinglyList.prototype.searchNodeAt = function(position) {
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
SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }
 
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
};

var list = new SinglyList();
list.add(1)
list.add(2)
list.add(3)
console.log(list);
console.log(list.searchNodeAt(3));
list.remove(2)
console.log(list.head);

// [nodemon] starting `node singly_linked_list.js`
// SinglyList {
//   _length: 3,
//   head: Node { data: 1, next: Node { data: 2, next: [Object] } } }
// Node { data: 3, next: null }
// Node { data: 1, next: Node { data: 3, next: null } }
// [nodemon] clean exit - waiting for changes before restart