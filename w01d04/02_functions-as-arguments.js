const runMyFunction = function(cb) {
  // console.log(cb.toString());
  cb(5); // console.log(5);
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

sayHello('Alice');

runMyFunction(sayHello);

const addTwo = function(num) {
  console.log(num + 2);
};

runMyFunction(addTwo);

runMyFunction(console.log);

// eqArrays(middle([1,2,3]), [2]);
// eqArrays([2], [2]);