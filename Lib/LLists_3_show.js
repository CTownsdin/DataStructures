// Pair Progammed with Christian Townsdin. Woot!
//--------------------------------
// Doubly Linked Lists
// -------------------------------
// The Node Class

module.exports = function() {

  function Node(element) {
      this.element = element;
      this.next = null;
      this.previous = null;
    }
    // The LList Class
  function LList() {
    this.head = new Node("head");
  }
  LList.prototype.find = function(item) {
    var currNode = this.head;
    while (currNode.element !== item) { // while (not found)
      currNode = currNode.next; // keep looking
    }
    return currNode; // return found item
  };
  LList.prototype.findPrevious = function(item) {
    var currNode = this.head;
    while ((currNode.next !== null) &&
      (currNode.next.element !== item)) {
      currNode = currNode.next; // keep looking till we find prev
    }
    return currNode; // return prev
  };
  LList.prototype.insert = function(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  };
  LList.prototype.display = function() {
    var currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element); // log next
      currNode = currNode.next; // move next
    }
  };
  LList.prototype.dispReverse = function() {
    var currNode = this.head;
    currNode = this.findLast();
    while (currNode.previous !== null) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  };
  LList.prototype.findLast = function() {
    var currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  };
  // TODO:  fix, if the next IS Null, fix.
  LList.prototype.remove = function(item) {
    var currNode = this.find(item);
    if (currNode.next !== null) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
  };
  LList.prototype.advance = function(item, n) {
    var current = this.find(item);
    var temp = current;
    this.remove(item);
    for (var i = 0; i < n; i++) {
      current = current.next;
    }
    temp.next = current.next;
    current.next = temp;
  };
  // TODO: This only works if you're not on the edges of the List
  // TODO:  Fix this late if time
  // ADD a check to keep from moving back the head!
  LList.prototype.back = function(item, n) {
    var current = this.find(item);
    var previous = this.findPrevious(item);
    this.remove(item);

    for (var i = 0; i < n; i++) {
      previous = this.findPrevious(previous.element);
    }
    // temp.next = current.next;
    // temp.previous = current;
    current.next = previous.next;
    current.previous = previous;
    previous.next = current;
    previous.next.previous = current;
  };

  // Implement the show() function, which displays the data associated with the current
  // node.
  LList.prototype.show = function(item) {
    //find the node
    var current = this.find(item);
    //show stuff. console log it
    console.log("The current element is " + current.element);
    console.log("The current element's next is " + current.next.element);
    console.log("The current element's previous is " + current.previous.element);
  };

};
//   var cities = new LList();
//   cities.insert("Con", "head");
//   cities.insert("Rus", "Con");
//   cities.insert("Alm", "Rus");
//   cities.insert("Dom", "Alm");
//   cities.insert("Eve", "Dom");
//   cities.insert("Fan", "Eve");
//   cities.display();
//   console.log('-------\n');

//   cities.show("Dom");
// };
