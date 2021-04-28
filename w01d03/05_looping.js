const snacks = ['hot cheetos', 'candy', 'trail mix'];

// iterates through the values
for (const snack of snacks) {
  console.log(`my fave snack is ${snack}`);
}

// iterates through the indexes (indices)
for (const index in snacks) {
  console.log(`my fave snack is ${snacks[index]}`);
}

for (let i = 0; i < snacks.length; i = i + 1) {}

console.log();

const snack = {
  flavour: 'zesty',
  spiciness: 7,
  texture: 'crunchy',
  amount: 20,
  dippable: true
};

for (const key in snack) {
  console.log(key);
  console.log(snack[key]);
}
