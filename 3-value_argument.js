// Get the first user argument
const arg = process.argv[2];

// Check and print
if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}