// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// declare a function? // for loop?

// Extract the command line arguments
const args = process.argv.slice(2);
console.log('args:', args);

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
  total += Number(arg);
  console.log('arg:', arg, "total:", total);
}

// Edge case: If any argument is not a whole number, skip it.

// Edge case: If any argument is not a number, output an error message.

// print the total
console.log("total", total);
