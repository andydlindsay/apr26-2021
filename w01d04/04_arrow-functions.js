// from CoffeeScript

// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// };

// no 'function' keyword
// no curly braces if only one line
// implicit return
// if only one argument, no parens needed
// if using 'this', arrow functions do not create 'this'
// fat arrow =>, skinny arrow ->

const sayHello = (name, age) => `hello there ${name} and you are ${age} years old`;

// const sayHello = function(name) {
//   return `hello there ${name}`;
// };

const addTwo = (num) => 2 + num;

const result = sayHello('Dean');
console.log('result', result);

const resultOfAddition = addTwo(5);
console.log(resultOfAddition);

const user = {
  username: 'Francis',
  sayMyName: function() {
    return console.log(this.username);
  }
}

user.sayMyName();
