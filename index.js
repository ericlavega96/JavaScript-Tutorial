//Extension LiveServer to update automatically


let name = 'John';
let age = 30;
let isApproved = false
console.log(name);

let firstName = 'James'; 
let lastName = 'Doe';


let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)
console.log(typeof name)

let person = {
    name: 'John',
    age: 34
};

// Dot notation
person.name = 'James';

//Bracket notation
person['name'] = 'Lucas';

let selection = 'name';
person[selection] = 'Joe';

console.log(person.name);

let selectedColors = ['red','blue'];
selectedColors[2] = 'green';

console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[2]);

function greet(name){
    console.log('Hello ' + name);
}

function square(number){
    return number * number;
}

greet('John');
greet('Joe');
console.log(square(2));