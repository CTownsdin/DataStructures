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

 // iterate over our expression,
 // add each member to a stack, and
 // when the member is an operation, calculate the previous 2 members with that operator.

// Take this String, ASSUME:  space separations, just numbers and operators:  +, *, -, /
var inputString = ' 2 2 + ';
var inputArray = inputString.trim().split(' ');

var numberStack = new Stack();
var opsStack = new Stack();

var c = '';
for (var i=0; i<inputArray.length; i++){
    c = inputArray[i];

    if ( !isNaN(parseFloat(c))) {     // it's a number
        numberStack.push(c);
    }
    else {               // must be +/-/*//
        // we've got to do math now!
        var num1 = numberStack.pop(), num2 = numberStack.pop();
        // eval and put the result back on the numberStack
        numberStack.push( eval(num1 + c + ' ' + num2));
    }
}

console.log(numberStack.pop());     // 4

