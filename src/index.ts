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

type user = {
    id: number;
    name: string
}

let user1: user = {
    id: 1,
    name: 'John'
}

console.log(user1);

export { };