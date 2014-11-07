// stack CTor
function Stack() {
    this.dataStore = [];    // arr that holds the elements
    this.top = 0;           // a counter, says WHICH is on TOP
}

Stack.prototype.push = function (element) {
    this.dataStore[this.top++] = element;   // post ++
};
Stack.prototype.pop = function () {
    return this.dataStore[--this.top];
};
Stack.prototype.peek = function () {
    return this.dataStore[this.top-1];
};
Stack.prototype.length = function () {
    return this.top;
};
Stack.prototype.clear = function () {
    this.top = 0;
    this.dataStore.length = 0;
};


// Take this String
var inputString = '2.3 + 23 / 12 + (3.14159 * .24';
// report the location of the last paren left open

var myStack = new Stack();

// go thru each char in inputString, push it to myStack
for(var i=0, len=inputString.length; i<len; i++){
    myStack.push(inputString.charAt(i));
}

// go thru the stack, popping off the top item
// IF it's a (, break and report, else keep going till the end.
while (myStack.datastore !== []) {
    var c = myStack.pop();
    if (c === '(') {
        // console.log(myStack.top);
        return myStack.top; }   // 16
    if (c === undefined) { return 'not found'; }
}

// NOTE!
// JUST RETURNING THE FIRST '('
// This algorithm could be improved to have pairing logic, ie ( )
// This might be done by creating another stack, and having pairs negate
// each other.
