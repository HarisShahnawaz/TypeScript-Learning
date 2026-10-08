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
console.log(Direction1.Up);
//# sourceMappingURL=index.js.map