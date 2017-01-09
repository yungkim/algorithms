/*
 * Reverse a linked list – iteratively and recursively
 * http://www.geeksforgeeks.org/write-a-function-to-reverse-the-nodes-of-a-linked-list/
 * http://articles.leetcode.com/reversing-linked-list-iteratively-and/
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

// the functionality to reverse a list iteratively.
// Time Complexity: O(n)
// Space Complexity: O(1)
SinglyList.prototype.itReverse = function() {
    // variable initialization
    var previousNode = null; // head does not have previous node
    var currentNode = this.head; // iterate starting from head
    var nextNode = currentNode.next; // store next node's address before unlinking the pointer

    // 1st use-case: iterate until reaching end of list (no node, node is null)
    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }

    // when last node in the list is detected, set as new head
    // if list is empty, head will be set as null
    this.head = previousNode

    return previousNode; // return last node which is now a new head
};

// the functionality to reverse a list recursively.
// Time Complexity: O(n)
// Space Complexity: O(1)
function recReverse (list) {
    // variable initialization
    var firstNode = list.head;
    var restNode = list.head.next;

    // 1st/2nd use-cases: an empty list or end of list
    if (!firstNode || !restNode) { return; }
    
    list.head = restNode;
    recReverse(list);
    firstNode.next.next = firstNode;
    firstNode.next = null;
};

var list = new SinglyList();
list.add(1); list.add(2); list.add(3) // Created list of [1, 2, 3]
debug(list.head.data); // --> 1
debug(list.head.next.data); // --> 2
debug(list.head.next.next.data); // --> 3
list.itReverse(); // reverse iteratively
debug(list.head.data); // --> 3
debug(list.head.next.data); // --> 2
debug(list.head.next.next.data); // --> 1
recReverse(list); // reverse recursively
debug(list.head.data); // --> 1
debug(list.head.next.data); // --> 2
debug(list.head.next.next.data); // --> 3
