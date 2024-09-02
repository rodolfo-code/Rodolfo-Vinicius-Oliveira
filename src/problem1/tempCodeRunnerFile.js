function sum_to_n_c(n) {
  if (n === 0) return 0;

  return n + sum_to_n_c(--n)
};
console.log(sum_to_n_c(3))