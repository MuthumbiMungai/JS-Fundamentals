// Define the add function
function add(a, b) {
  return a + b;
}

// Get and convert arguments
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// Use the function and print result
console.log(add(a, b));