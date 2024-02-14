const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if (arr.lenght === 0) return 0;

  let sum = 0;
  arr.map((arg) => sum += arg);
  return sum;
};

const multiply = function() {
  const arr = [];
  Array.from(arguments).map((arg) => arg.map((subArg) => arr.push(subArg)));
  if (arr.lenght === 0) return 0;
  
  let mult = 1;
  arr.map((number) => mult *= number);
  return mult;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {	
  if (a === 0) return 1;

  let result = 1;
  for (let i = 1; i <= a; i++){
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
