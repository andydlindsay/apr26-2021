let number = 5;
const user = {
  name: 'Carol'
}

const myFunc = function(number) {
  console.log(number);
  number = 10;

  user.name = 'Dean';
};

myFunc(number);
console.log(number);

