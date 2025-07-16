// Get the size of the square
const size = parseInt(process.argv[2]);

// Check if size is a number
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // Outer loop: rows
  for (let i = 0; i < size; i++) {
    // Print a row of X's using repeat
    console.log('X'.repeat(size));
  }
}