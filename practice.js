//let and const

// let score = 10;
// score = 12;
// console.log(score);

// const age = 25;
// age = 27;
// console.log(age);


// String, Number, Boolean, null, undefined

// const name = 'Pratik Rane';
// const age = 23;
// const rating = 4.5;
// const iscool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof x);


// const name ='Pratik Rane';
// const age = 23;

// //concatenation
// console.log('My name is ' + name + ' and I am ' + age);

// //template string
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);


// const s = 'Hello World!';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(''))

//Arrays - variables that hold multiple values

// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// console.log(fruits[1]);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('grapes'));

// const person = {
//     firstName: 'Pratik',
//     middleName: ' Sandeep',
//     lastName: 'Rane',
//     age: 23,
//     hobbies: ['singing', 'drawing', 'music'],
//     address: {
//         street: '50th main street',
//         city: 'Mumbai',
//         state: 'Maharashtra'
//     }
// }

// // console.log(person.address.city);

// // const { firstName, lastName, address: { city } } = person;

// // console.log(city);

// person.email = 'pratikrane0412@gmail.com';
// console.log(person);

// TODO in arrays

// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'dentist appointment',
//         isCompleted: false
//     },
// ]

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// //FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     console.log(`For loop number: ${i}`);
// }

// //WHILE LOOP

// let i = 0;
// while(i < 10){
//     console.log(`For loop number: ${i}`);
//     i++;
// }

// for (let todo of todos) {
//     console.log(todo.text);
// }

// forEach, map, filter

// todos.forEach(function (todo) {
//     console.log(todo.text);
// });

// const todoText = todos.map(function (todo) {
//     return todo.text;
// })

// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// })
// console.log(todoCompleted);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;                   //filter + map function
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);

//CONDITIONS

// const x = 11;
// // const y = 11;

// const color = x > 10 ? 'red' : 'blue';

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('not red and blue');
//         break;
// }


// if(x > 5 || y > 10){
//     console.log('x is greater than 5 and y is greater than 10');
// }

// if (x === 10) {
//     console.log('x is 10');
// } else {
//     console.log('x is not 10');
// }

//FUNCTIONS

// function addNums(num1, num2) {              //simple way to declare a function
//     return num1 + num2;
// }

// console.log(addNums(5, 4));

// another way to declare a function

// const addNums = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addNums(2, 2));

// there is also another way if you dont want to use return 

// const addNums = (num1, num2) => num1 + num2;
// console.log(addNums(3, 4));



//CONSTRUCTOR FUNCTIONS AND PROTOTYPE

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // this.getbirthMonth = function () {
//     //     return this.dob.getMonth();
//     // }                                            //another way to write this methods
//     // this.getfullName = function () {
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }

// Person.prototype.getbirthMonth = function () {
//     return this.dob.getMonth();
// }

// Person.prototype.getfullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// //initiating and object
// const person1 = new Person('Pratik', 'Rane', '12-4-2001');
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.dob.getFullYear());
// console.log(person1.getbirthMonth());
// console.log(person1.getfullName());


//CLASSES 

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getbirthYear() {
//         return this.dob.getFullYear();
//     }

//     getfullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('Pratik', 'Rane', '12-4-2001');
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.dob.getMonth());
// console.log(person1.getbirthYear());
// console.log(person1.getfullName());


//single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// //multiple elements
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('items'));

// ITEMS

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background ='red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>'
// });