// Write a function that takes a binary function and makes it callable
// with 2 invocations
// e.g. liftf(add)(2)(3)

// binary function
function add(a, b) {
  return a + b;
}

function liftf(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b)
    }
  }
}

const result1 = liftf(add)(2)(3);
const result2 = liftf(add)(1);

console.log(result2(19));

module.exports = liftf;