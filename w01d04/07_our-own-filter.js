const pets = ['Reggie', 'Amber', 'Cookie', 'Arye', 'Charlie'];

// const filtered = pets.filter(pet => pet === 'Reggie');

// console.log(filtered);
// console.log(pets);

const ourFilter = (arr, callback) => {
  const returnArr = [];

  for (const element of arr) {
    const returnVal = callback(element);

    if (returnVal) {
      returnArr.push(element);
    }

    // if (callback(element)) {
    //   returnArr.push(element);
    // }
  }

  return returnArr;
};

const filtered = ourFilter(pets, (pet) => {
  return pet === 'Reggie' || pet === 'Arye';
});

console.log(filtered);
console.log(pets);
