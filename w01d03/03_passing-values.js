const changeToTen = function(num) {
  num = 10;
  console.log('inside the function', num);
}

const myNumber = 5;
console.log(myNumber);

changeToTen(myNumber);
console.log(myNumber);

const changeUserToBob = function(obj) {
  obj.name = 'Bob';
};

console.log();

const user = {
  name: 'Alice',
  grade: 90
};

console.log('before', user);

changeUserToBob(user);

console.log('after', user);

