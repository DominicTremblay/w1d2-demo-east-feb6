// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// declare a function? // for loop?

// Extract the command line arguments
const args = process.argv.slice(2);
console.log('args:', args);
if (args.length < 2) {
  console.log("Please, enter at least 2 arguments");
  process.exit(); // <= allows me to not use an else statement
}

// Edge case: We need at least 2 arguments.

// declare a placeholder to hold the total
let total = 0;

// Iterate through the command line args.
// for loop
// c-style for loop for (let i=0; i < arr.length; i++ )...
// for of, forEach
// index?

for (let arg of args) {
  // Add the arg to the total
  // Edge case: If any argument is not a whole number, skip it.
  // use the modulo operator %
  // math.floor
  // Number.isInteger()
  const convertedNum = Number(arg);

  if (Number.isInteger(convertedNum)) {
    total += convertedNum;
  }
  // Edge case: If any argument is not a number, output an error message.
  if (isNaN(convertedNum)) {
    console.log("Please input only numbers");
    // stop the script
    // return => return a value out of a function, exits the function (side effect)
    // return;
    process.exit(); // <= revealing my intent
  }

  console.log('arg:', convertedNum, 'total:', total);
}


// print the total
console.log('total', total);
