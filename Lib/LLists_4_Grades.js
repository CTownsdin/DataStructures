// Pair Progammed with Stephanie and Karl ! :)  Go Team
module.exports = function() {
  // The Node Class
  //             "name"
  function Node(element, grade) {
      this.element = element;
      this.grade = grade || 0;
      this.next = null; // Note!
    }
    // The LList Class
  function LList() {
    this.head = new Node("head");
    this.tail = this.head;
    // this.remove = remove;    :TODO
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
  LList.prototype.remove = function(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next; // move pointer
    } else {
      this.tail = prevNode;
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
  // ADD STUDENT FUNCTION
  LList.prototype.addStudent = function(newElement, grade) {
    var newNode = new Node(newElement, grade);
    var current = this.tail;
    newNode.next = current.next;
    current.next = newNode;
    this.tail = newNode;
  };
  // UPDATE GRADE FUNCTION
  LList.prototype.updateGrade = function(student, grade) {
    var currNode = this.head;
    while (currNode.element !== student) { // while (not found)
      currNode = currNode.next; // keep looking
    }
    currNode.grade = grade;
    console.log(student + '--' + currNode.grade); // report to teacher
  };
  // SHOW GRADE FUNCTION
  LList.prototype.displayStudent = function(student) {
    //find the node
    var current = this.find(student);
    //show stuff. console log it
    console.log(student + '--' + current.grade);
  };
  // SHOW ALL GRADES FUNCTION
  LList.prototype.displayAll = function() {
    var currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element + ' ' + currNode.next.grade);
      currNode = currNode.next;
    }
  };

  // Write a program that uses a singly linked list to keep track of a set of test // grades entered interactively into the program.

};

// var classList = new LList();
// classList.addStudent("Alice", 95);
// classList.addStudent("Rus", 85);
// classList.addStudent("Ada");
// classList.displayAll();

// classList.displayStudent('Rus');
// classList.updateGrade('Ada', 95);
