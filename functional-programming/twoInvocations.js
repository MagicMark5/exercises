// Write a function that adds from 2 invocations
// e.g. addf(3)(4)

function addx(x) {
  // this function can stay anonymous (no name)
  return function (y) {
    return x + y
  }
}

const sum = addx(3)(4);

console.log(sum);