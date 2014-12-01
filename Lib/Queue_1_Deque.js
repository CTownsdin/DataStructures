// create a Deque class. A deque is a queue-like structure that allows elements to be added and removed from both the front and the back of the list. Test your class in a program.
module.exports = function() {

  function Deque() {
    this.dataStore = [];
  }
  Deque.prototype.enqueueBack = function(element) {
    this.dataStore.push(element);
  };
  Deque.prototype.enqueueFront = function(element) {
    this.dataStore.unshift(element);
  };
  Deque.prototype.dequeueBack = function() {
    return this.dataStore.pop();
  };
  Deque.prototype.dequeueFront = function() {
    return this.dataStore.shift();
  };
  Deque.prototype.front = function() {
    return this.dataStore[0];
  };
  Deque.prototype.back = function() {
    return this.dataStore[this.dataStore.length - 1];
  };
  Deque.prototype.toString = function() {
    var retStr = '';
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + '\n';
    }
    return retStr;
  };

  function empty() {
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }

};

// var myD = new Deque();
// myD.enqueueBack('Jack');
// myD.enqueueBack('Apple');
// myD.enqueueFront('Rude Rob');   // how rude!
// myD.dequeueBack('Apple');  // Apple is outta here!
// myD.enqueueBack('Alice');
// console.log(myD);       //   Rr J A
