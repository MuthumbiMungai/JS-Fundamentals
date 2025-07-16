#!/usr/bin/node

/**
 * factorial - Recursively computes the factorial of a number
 * @n: number (integer)
 * Return: factorial of n, or 1 if n is NaN or less than 2
 */
function factorial(n) {
  if (isNaN(n) || n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the argument from command line
const arg = process.argv[2];
const num = parseInt(arg);

// Print the factorial using console.log
console.log(factorial(num));