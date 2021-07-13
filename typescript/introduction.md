
## why we use Typescript

Typescript is a 'superset' to the javascript . syntacs are based on the core javascript ,but added the static type . 

below ,use a small demo to show you why we use Typescript.

````
function add(a,b){
    reuturn a+b;
}
const result1 = add(2,5);
console.log(result1);    //7

const result2=add('2','5');
console.log(result2);   //25

````

we can see that , when we write the javascript code , we do not know exactly what kind of parameters we use to pass to the add function , if we pass string params , it will cause problems . This is why typescript comes .

with typescript , we can just specify thAe type of parameters just simply by `: `, and spot the errors before running the code . 


````
function add(a:number,b:number){
    reuturn a+b;
}
````

## How to use Typescript 

1.) install the Typescript 

````
npm install -g typescript
````

2.) run the typescript code

````
tsc filename.ts // the typescript file name 
````

there are also other useage ,like use with ReactJs , you can just create a react-typescript project with npx 

````
npx create-react-app my-app --template typescript
````

for more information about how to create a project with typescript and reactJs , you can click here [Create React App ](https://create-react-app.dev/docs/getting-started)


## basic syntax

### Typing

The type system allows you to add types to variables ,function arguments and function return types,giving a more rigid structure to your program .

The advantages are better tooling :

- detact the bugs in advance(editors like vscode , can help you a lot during development,poing out bugs as you write the code.)

- teamwork get easier because the code is more explicit.

### Typesystem 

there are mainly two types of type system and we can use `:` or by inference to define them .

- Primitive: number,string,boolean(if it is Number,String,Boolean ,which starts with big letter , it will be number object , instead of number primitive),bigint, null, symbol, and undefined,any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).

- Complex type : objects,arrays

#### Type inference 


below two lines of code is the same ,first line we difine the type by inference . Typescript knows the javascript and will genereate the types for you in many cases .  For example in creating a variable and assigning it to a particular value ,Typescript will use the value as its type . 

````
let helloWorld = 'hello world';
let helloWorld:string = 'hello world';
````

#### Defining Types with `:`

One can use a wide variety of design patterns in Javascript and some makes it difficult for types to inferred automatically . To cover these cases , Typescript offers places for you tell Typescript what the type should be by `:`;

below is the demo to show how to define types ,

````

<!-- number variable  -->

let a : number = 4;

<!-- string array  -->

let hobbies:string[] = ["reading",'swimming'];

<!--   -->

let person : {
    name:'string',
    age:'number'
}

// this is right
person={ 
    name:'Abdulla',
    age:24
}

// this is wrong 
person = {
    interest:'reading'
}

<!-- Array of object -->

let people: {
    name: string,
    age: number
}[];

people = [{
    name: "ab",
    age:34
},
    {
    name: "abc",
    age:34
}
];

<!-- or can use interface kwyword to explicitly describe the shape of the variable -->

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};
````

for fucntions 

````
function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  // ...
}
````

### Union types 

specify more than one type to the variables.

````
let course : string | number = 'react-course';

course = 1234;

<!-- describe the set of string or number literals that a value is allowed to be: -->
type WindowStates = "open" | "closed" | "minimized";

````


### Generics

helps we write safe yet flexiable functions.It provide variables to types. In short, you can create a function, interface or class that works with different types, without specifying the type up front.

````
// any is too general ,and it loses the meaning of using typescript

function insertAtBegining(array:any[],value:any) {
    let newArr = [value, ...array];
    return newArr;
}

// if we specify the type number , this function will lost it's utility 

function insertAtBegining(array:number[],value:number) {
    let newArr = [value, ...array];
    return newArr;
}

// if we specify the type string , this function will lost it's utility 

function insertAtBegining(array:string[],value:string) {
    let newArr = [value, ...array];
    return newArr;
}

const demoArr = [1, 2, 3];

const updatedArr = insertAtBegining(demoArr, 4);
````

````
// more generic functions

function insertAtBegining<T>(array:T[],value:T) {
    let newArr = [value, ...array];
    return newArr;
}
````

## Reference 

[TypeScript Tutorial](https://flaviocopes.com/typescript/)

[TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)


