#!/usr/bin/node

/**
 * factorial - Recursively computes the factorial of a number
 * @n: The number to compute factorial for
 * 
 * Return: The factorial of the number, or 1 if n is NaN or <= 1
 */
function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }

  const num = parseInt(n);

  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

// Get the command-line argument
const arg = process.argv[2];

// Compute the factorial
const result = factorial(arg);

// Print the result
console.log(result);
