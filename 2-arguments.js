// Get arguments passed to the script
const args = process.argv.slice(2);  // Removes the first 2 default entries

// Check the number of arguments
if (args.length === 0) {
  console.log('No argument');
} else if (args.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}