// Pair Progammed with Stephanie and Karl

// The Node Class
function Node(element) {
  this.element = element;
  this.next = null; // Note!
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
LList.prototype.insert = function(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};
LList.prototype.display = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};
LList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while ((currNode.next !== null) &&
    (currNode.next.element !== item)) {
    currNode = currNode.next; // keep looking till we find prev
  }
  return currNode; // return prev
};
LList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (prevNode.next !== null) { // we don't remove items that don't exist!
    prevNode.next = prevNode.next.next; // move pointer
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
LList.prototype.hi = function(name) {
  console.log('hi ' + name);
}

module.exports = LList;

// var cities = new LList();
// cities.insert("Con", "head");
// cities.insert("Rus", "Con");
// cities.insert("Alm", "Rus");
// cities.insert("Dom", "Alm");
// cities.insert("Eve", "Dom");
// cities.display();
// console.log('-------\n');

// cities.advance("Alm", 2);
// cities.display();
// // console.log('-------\n');
