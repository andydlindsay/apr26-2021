const pets = ['Reggie', 'Amber', 'Cookie', 'Arye', 'Charlie'];

// pets.forEach(pet => console.log(`do you want a skritch, ${pet}?`));

const forEach = (arr, callback) => {
  for (const element of arr) {
    callback(element);
  } 
};

forEach(pets, pet => console.log(`do you want a skritch, ${pet}?`));
