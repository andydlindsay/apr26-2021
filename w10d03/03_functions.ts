// what does it take in? what does it give back?

const sayHello = (name: string, age?: number): void => {
  console.log(`hello there ${name}`);
};

const result = sayHello('bob');

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

const takesInCallback = (cb: (num: number) => boolean): void => {
  cb(42);
};
