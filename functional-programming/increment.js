// useing the functions we've written so far, write a function increment
// 
const { curry, add } = require('./curry');

let incrementExample = curry(add, 1);
// incrementExample(5) 
// 6


function increment(num) {
  return curry(add, 1)(num)
}

console.log(increment(5));