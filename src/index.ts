// Basic Types

let id: number = 5;
let company: string = 'Travery Media';
let isPublished: boolean = true;
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]

let arr: any[] = [1, true, 'Hello']

//Tuple

let person: [number, string, boolean] = [1, 'John', true]

//Tuple Array
let employee: [number, string][]
employee =
    [
        [1, 'John'],
        [2, 'Jane'],
        [3, 'Bob']
    ]


let pid: number | string
pid = '22'


//Enum

enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction2.Down);


//Objects

type User = {
    id: number;
    name: string
}

const user: User = {
    id: 1,
    name: "John"
}

// type Assertion

let cid: any = 1
// let customerId = <number>cid

let customerId = cid as number
console.log(customerId);

// Functions

function addNum(x: number, y: number): number {
    return x + y
}

//void 

function log(message: string | number): void {
    console.log(message);


}

//Interface


interface Userinterface {
    readonly id: number;
    name: string;
    age?: number
}

const user1: Userinterface = {
    id: 1,
    name: "John"

}

interface Mathfunc {
    (x: number, y: number): number

}
const add: Mathfunc = (x: number, y: number): number => x + y
const sub: Mathfunc = (x: number, y: number): number => x - y

interface Personinterface {
    id: number;
    name: string;
    register(): string;
}


//Classes

class Person implements Personinterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }
    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Traver')
const mike = new Person(2, 'Mike Jordan')


class Employee extends Person {
    position: string;
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(1, 'shawn', 'developer')
console.log(emp.name);

//Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}


let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(['haris', 'shahnawaz', 'shawn', 'jordan'])

strArray.push('hello')
numArray.push(1)


export { };