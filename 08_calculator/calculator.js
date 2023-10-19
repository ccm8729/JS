const add = function(a, b) {
  let tot = a + b; 
  return tot;
	
};

const subtract = function(a, b) {
	let sub = a - b;
  return sub;
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0);  
};

const multiply = function(array) {
  const fact = array; 
  let len = fact.length;
  let z = 1;
  for (i = 0; i < array.length; i++)
  {
    let a = array[i];
    console.log('Length: ' + len);
    console.log('i = ' + i); 
    z = z * a; 
    console.log('Z = ' + z);

  }
  return z;

};

const power = function(a, b) {
let z = a ** b; 
return z;

	
};

const factorial = function(n) {
  let a = n;
  let b = 0;
  let z = 1;
	
  for (i = a; i > 0; i--)
  {
    z = i * z;
  }
  return z;
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
