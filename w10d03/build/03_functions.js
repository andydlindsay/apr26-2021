"use strict";
// what does it take in? what does it give back?
const sayHello = (name, age) => {
    console.log(`hello there ${name}`);
};
const result = sayHello('bob');
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
const takesInCallback = (cb) => {
    cb(42);
};
