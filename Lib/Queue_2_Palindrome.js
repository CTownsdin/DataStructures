module.exports = function () {

function Deque() {
    this.dataStore = [];
}
Deque.prototype.enqueueBack = function (element) {
    this.dataStore.push(element);
};
Deque.prototype.enqueueFront = function (element) {
    this.dataStore.unshift(element);
};
Deque.prototype.dequeueBack = function () {
    return this.dataStore.pop();
};
Deque.prototype.dequeueFront = function () {
    return this.dataStore.shift();
};
Deque.prototype.front = function () {
    return this.dataStore[0];
};
Deque.prototype.back = function () {
    return this.dataStore[this.dataStore.length-1];
};
Deque.prototype.toString = function () {
    var retStr = '';
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + '\n'; }
        return retStr;
    };
    function empty() {
        if (this.dataStore.length === 0) { return true; }
        else { return false; }
}


// using this fancy queue, determine if a provided string
// is an Palindrome

// odd
// r a c e c a r
//     | | |

// even
// t u i z z i u t
//         |
//         z i u t
// strategy
// take half, reverse it, and
// compare it to the other half.

var myD = new Deque();

var inputString = 'tiuzAzuit';
var iArr = inputString.trim().split('');

// TODO:  do this functional style wo for loop
// fill that deque
for (var i=0; i<iArr.length; i++){
    myD.enqueueBack(inputString[i]);
}

var isOdd = true;
if (iArr.length % 2 === 0) { isOdd = false; }


// find the starting point index that we want
var stop = Math.ceil(iArr.length / 2);
if ( isOdd ) { stop -= 1; }

var compareQ = new Deque();
// until we reach that index, keep dequeingFront
for (var j=0; j<stop; j++){
    // and pushing onto a queue in the normal fifo queue manner
    // z i u t
    compareQ.enqueueFront(myD.dequeueFront());
}
if ( isOdd ) { myD.dequeueFront(); }

if (compareQ.toString() === myD.toString()) {
    console.log('Palindrome Detected!');
}
else{ console.log('nope'); }

};


