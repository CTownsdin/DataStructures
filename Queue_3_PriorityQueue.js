// Make a PQ such that high pri el's have higher nums.
// Let’s begin building a priority queue system by first defining an object that will store the elements of the queue:
// -------------Queue-------------------
function Queue() {
    this.dataStore = [];
}
Queue.prototype.enqueue = function (element) {
    this.dataStore.push(element);
};
Queue.prototype.dequeue = function () {
    return this.dataStore.shift();
};
Queue.prototype.front = function () {
    return this.dataStore[0];
};
Queue.prototype.back = function () {
    return this.dataStore[this.dataStore.length-1];
};
Queue.prototype.toString = function () {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n"; }
        return retStr;
};
Queue.prototype.empty = function () {
        if (this.dataStore.length === 0) { return true; }
        else { return false; }
};
// ------------Patient, PriorityQ---------------------
function Patient(name, code) {
    this.name = name;
    this.code = code;
}
Patient.prototype.dequeue = function () {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code > this.dataStore[entry].code) {
            // ^ THIS line determines priority, > means higher nums
            // have priority.  < for lower nums have priority
            entry = i;
        }
    }
return this.dataStore.splice(entry,1);
};
// TODO:  Fix the author's Patient.toString() !
// Patient.prototype.toString = function () {
//     var retStr = "";
//     for (var i = 0; i < this.dataStore.length; ++i) {
//         retStr += this.dataStore[i].name + " code: " +
//             this.dataStore[i].code + "\n";
//     }
// return retStr;
// };
// -------------------------------


// basic test
// enqueue patients
// var Q = new Queue();
// Q.enqueue(new Patient("Smith",5));
// Q.enqueue(new Patient("Jones", 4));
// Q.enqueue(new Patient("Fehrenbach", 6));
// Q.enqueue(new Patient("Brown", 1));
// // console.log(Q.toString());      // 4 Objs

// // first round
// var done = Q.dequeue();     // dequeue the first priority patient
// console.log("Patients done: \n" + done.toString() + '\n');
// console.log("Patients waiting: \n" + Q.toString()) + '\n';

// // second round
// done += Q.dequeue();      // dequeue the next patient
// console.log("Patients done: \n" + done.toString() + '\n');
// console.log("Patients waiting: \n" + Q.toString()) + '\n';
