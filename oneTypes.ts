// const word: string = "Hello";
//
// console.log(word);

//============

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello Typescript";

const numberArrayOne: number[] = [1, 2, 3, 4, 5];
const numberArrayTwo: Array<number> = [1, 2, 3, 4, 5];

const words: string[] = ["Hello", "Typescript"];

//Tuple
const contact: [string, number] = ["Artem", 123456789];

//Any
let variable: any = 100;
//...
variable = "Type String";
variable = [];

//function

function sayMyName(name: string): void {
    console.log(name);
}

sayMyName("Вин Дизель");

//Never
function throwEror(message: string) {
    throw new Error(message);
}

function infinte(): never {
    while (true) {

    }
}

//Type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";

type SomeTypes = string | null | undefined
