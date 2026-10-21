"use strict";
// Basic Types
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let company = 'Travery Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'John', true];
//Tuple Array
let employee;
employee =
    [
        [1, 'John'],
        [2, 'Jane'],
        [3, 'Bob']
    ];
let pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: 1,
    name: "John"
};
// type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
console.log(customerId);
// Functions
function addNum(x, y) {
    return x + y;
}
//void 
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad Traver');
const mike = new Person(2, 'Mike Jordan');
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'shawn', 'developer');
console.log(emp.name);
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['haris', 'shahnawaz', 'shawn', 'jordan']);
strArray.push('hello');
numArray.push(1);
//# sourceMappingURL=index.js.map