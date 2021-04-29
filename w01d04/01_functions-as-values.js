const username = 'Alice';
const otherUsername = username;
// const val = function () {}

// function sayHello () {};

// everything that's not a primitive, is an object

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

sayHello.secretMessage = 'I am a property on an object';

console.log(sayHello.secretMessage);

// sayHello(username);

const otherVariable = sayHello;
const yetAnotherVar = otherVariable;

otherVariable('Bob'); // ?
