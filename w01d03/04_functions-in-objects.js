let snack = {
  flavour: 'zesty',
  spiciness: 7,
  texture: 'crunchy',
  amount: 20,
  dippable: true,

  eatSome: function(amountEaten) {
    this.amount = this.amount - amountEaten;
    console.log(`there is ${this.amount} left`);
  },
  goOnADiet: function(amount) {
    const reducedAmount = amount / 2;
    this.eatSome(reducedAmount);
  },
  changeTexture: function(newTexture) {
    this.texture = newTexture;
  }
};

const myOtherSnack = snack;
snack = null;

console.log(myOtherSnack);
myOtherSnack.eatSome(6);
myOtherSnack.goOnADiet(10);

console.log()
