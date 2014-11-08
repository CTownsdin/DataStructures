// // The Node Class
// function Node(element) {
//     this.element = element;
//     this.next = null;  // Note!
// }
// // The LList Class
// function LList() {
//     this.head = new Node("head");
//     // this.remove = remove;    :TODO
// }
// LList.prototype.find = function (item) {
//     var currNode = this.head;
//     while (currNode.element != item) {  // while (not found)
//         currNode = currNode.next;   // keep looking
//     }
//     return currNode;    // return found item
// }
// LList.prototype.insert = function (newElement, item) {
//     var newNode = new Node(newElement);
//     var current = this.find(item);
//     newNode.next = current.next;
//     current.next = newNode;
// }
// LList.prototype.display = function () {
// var currNode = this.head;
// while (!(currNode.next === null)) {
//           console.log(currNode.next.element);
//           currNode = currNode.next;
//        }
// }
// LList.prototype.findPrevious = function (item) {
// var currNode = this.head;
//     while (!(currNode.next === null) &&
//                    (currNode.next.element != item)) {
//         currNode = currNode.next;       // keep looking till we find prev
//     }
//     return currNode;    // return prev
// }
// LList.prototype.remove = function (item) {
//     var prevNode = this.findPrevious(item);
//     if (!(prevNode.next == null)) {  // we don't remove items that don't exist!
//            prevNode.next = prevNode.next.next;  // move pointer
//     }
// }

// basic test
// var cities = new LList();
// cities.insert("Conway", "head");            //               Con, head
// cities.insert("Russellville", "Conway");    //        Rus -> Con
// cities.insert("Alma", "Russellville");      // Alm -> Rus -> Con
// cities.display();

// var cities = new LList();
// cities.insert("Conway", "head");                //                  Con, head
// cities.insert("Russellville", "Conway");        //           Rus -> Con
// cities.insert("Carlisle", "Russellville");      //    Car -> Rus -> Con
// cities.insert("Alma", "Carlisle");          // Alm -> Car
// cities.display();
// cities.remove("Carlisle");
// cities.display();

//--------------------------------
// Doubly Linked Lists
// -------------------------------
// The Node Class
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;       // this previous link, essential DLL ft
}
// The LList Class
function LList() {
    this.head = new Node("head");
    // this.remove = remove;    :TODO
}
LList.prototype.find = function (item) {
    var currNode = this.head;
    while (currNode.element !== item) {  // while (not found)
        currNode = currNode.next;   // keep looking
    }
    return currNode;    // return found item
};
LList.prototype.insert = function (newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
};
LList.prototype.display = function () {
    var currNode = this.head;
    while (currNode.next !== null) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
};
LList.prototype.dispReverse = function () {
    var currNode = this.head;
    currNode = this.findLast();
    while (currNode.previous !== null) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
};
LList.prototype.findLast = function () {
    var currNode = this.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    return currNode;
};
LList.prototype.remove = function (item) {
    var currNode = this.find(item);
    if (currNode.next !== null) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
};


// Basic test
// var cities = new LList();
// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Carlisle", "Russellville");
// cities.insert("Alma", "Carlisle");
// cities.display();
// console.log('\n');

// cities.remove("Carlisle");
// cities.display();
// console.log('\n');

// cities.dispReverse();

