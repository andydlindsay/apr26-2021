const pets = ['Reggie', 'Amber', 'Cookie', 'Arye', 'Charlie'];
// console.log(pets);

// const mapped = pets.map((pet) => {
//   return `${pet} can has cheeseburger`;
// });

// console.log(mapped);

const ourMap = (arr, callback) => {
  // set up a return array to hold all the values
  const returnArr = [];

  for (const element of arr) {
    const returnVal = callback(element);
    returnArr.push(returnVal);

    // returnArr.push(callback(element));
  }

  return returnArr;
};

const mapped = ourMap(pets, (pet) => {
  return `hey ${pet}! quit scratching the couch!`;
});
console.log(mapped);
console.log(pets);
