const runMyFunction = function(cb) {
  cb('Alice');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunction(sayHello);

// anonymous function
runMyFunction(function(name) {
  console.log(`something profound will happen to you ${name}`);
});

arr.forEach(function(x) { x + b })

// anonymous string
sayHello('Alice');

// // not anonymous
const username = 'Bob';
sayHello(username);
