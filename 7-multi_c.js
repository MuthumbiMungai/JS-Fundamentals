// Get number of times to print
const x = parseInt(process.argv[2]);

// Check if x is a number
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  // Loop x times
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}