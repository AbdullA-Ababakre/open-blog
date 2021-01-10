class Person {

    constructor(){
        this.name='Abdulla';
    }

    sayName() {
        console.log(this.name);
    }
}

const person=new Person();
console.log(person.name);
person.sayName();