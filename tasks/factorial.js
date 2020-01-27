const fac_0 = n => {
  let a = 1;
  let c;
  for (let i = 2; i <= n; i++) {
    c = a * i;
    a = c;
  }
  return a;
};

const fac_1 = n => n <= 1 ? 1 : n * fac_1(n - 1);

module.exports = { fac_0, fac_1 };
