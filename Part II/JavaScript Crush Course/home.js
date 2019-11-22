console.log('Hello');

// alert('Hello this is great');


var b = 'Smooth';
console.log(b);

// var age = prompt('What is your age');

// document.getElementById('tag').innerHTML = age;

// Numbers in Java
var num1 = 5.7;
num1++;
num1+= 2;
console.log(num1);

// Functions

function fun(){
    alert('This is a function')
}

function greeting(name){
    var name = prompt('What is your name?');
    var result = 'Hello ' + name;
    console.log(result);
}

// greeting('Joe');

function sumNumbers(a, b){
    return a +  b;
}

// Loops

//var num = 0;

// while (num < 10){
//     num++;
//     console.log(num);
// }

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

//Data types
let yourAge = 18; // Number
let yourName = 'Bob'; // String
let person = {firstName: 'Jane', lastName: 'Doe'}; // Object
let bool = true; // Boolean
let list = ['Apple', 'Banana', 'Strawberry']; // Array
let fruitsString = 'Berry, Apple, Blueberry, Orange, Pear'
let rand; // undefined
let nothing = null; // Null value

// String methods

let fruit = 'orange';

console.log(fruit.length);
console.log(fruit.indexOf('g'));
console.log(fruit.slice(2,5));
console.log(fruit.replace('ange','ian'));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruitsString.split(', '));

//Arrays
let fruits = ['banana', 'apple', 'orange', 'berry'];
let fruits2 = new Array('banana', 'apple', 'orange', 'berry');
console.log(fruits2[2]);
fruits[0] = 'pear';
console.log(fruits);

for (let i=0; i < fruits; i++){
    console.log(fruits[i]);
}

// Array common methods
console.log(fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop());
console.log(fruits.push('blackberry'), fruits);
fruits[fruits.length] = 'strawberry';
console.log(fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.unshift('kiwi'), fruits);

let vegetables = ['asparagus','tomato','broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let numbers =  [5, 10, 9, 64, 34, 1, 255, 345];
console.log(numbers.sort(function(a, b){return a-b}));

// Objects in JS

let student = {
    firstName: 'Rafy',
    lastName: 'Doe',
    age: 32,
    studentInfo: function(){
        return this.firstName + " " + this.lastName;
    }
};

student.firstName = 'John';
student.age++;
console.log(student);
console.log(student.firstName);
console.log(student.age);
console.log(student.studentInfo());

// Conditionals and control flows
let age = 36;

if((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status)
}else{
    status = 'not my audience';
    console.log(status);
}

// Swith statement
// day 0 --> Sunday
// day 6 --> Saturday
// day 4 --> Thursday --> weekday

switch(6){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
        break;
}

console.log(text);







