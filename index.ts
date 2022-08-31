// variables
interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person: Person = {
    first: 'Jeff',
    last: 'Delaney'
}

// functions
function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}

pow(5, 10)

// arrays

type MyList = [number?, string?, boolean?]

const arr: MyList = [];

arr.push(1);
arr.push('651651');
arr.push(false);

// generics

class Observable<T> {
    constructor(public value: T) { }
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23)

// is this working