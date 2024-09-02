// We can solve this problem using looping (for, while, do while) 
function sum_to_n_a(n) {
  if (n === 0) return 0

  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

// Using math
function sum_to_n_b(n) {
  return (n * (n + 1)) / 2;
};

// Using recursion
function sum_to_n_c(n) {
  if (n === 0) return 0;

  return n + sum_to_n_c(--n)
};
