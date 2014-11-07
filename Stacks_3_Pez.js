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

// Fill a Pez dispenser w red, white, and blue
var pez1 = new Stack();

pez1.push('red');
pez1.push('white');
pez1.push('blue');
pez1.push('red');
pez1.push('white');
pez1.push('blue');

// push all those out onto another stack, removing whites as you go cause they taste bad.
var pez2 = new Stack();

// console.log('pez2');

var temp = '';
while (pez1.peek() !== undefined) {       // still some in there
    var temp = pez1.pop();
    if (temp === 'white') { temp = undefined; }
    else { pez2.push(temp); }
}

// push all the candies back onto the first stack, just because
while (pez2.peek() !== undefined) {       // still some in there
    pez1.push(pez2.pop());
}

temp = undefined;   // just seems right.  garbage collection?

console.log(pez2);
