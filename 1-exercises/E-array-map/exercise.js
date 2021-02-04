// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function hundredNumber(num) {
  return num * 100;
}
let numbers2 = numbers.map(hundredNumber);

let numbers3 = numbers.map(function (num) {
  return num * 100;
});

let numbers4 = numbers.map((num) => num * 100);
