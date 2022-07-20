// write a function that takes in a function and an argument, 
// and returns a function that can take a second argument
// e.g curry(add, 9)(3)

function add(x, y) {
  return x + y;
}

// this is called "currying"
function curry(fn, x) {
  return function (y) {
    return fn(x, y)
  }
}

const sum = curry(add, 9)(3);

//console.log(sum);

module.exports = { add, curry };