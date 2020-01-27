const fibo_0 = n => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

const fibo_1 = n => n <=1 ? n : fibo_1(n - 1) + fibo_1(n - 2);

module.exports = { fibo_0, fibo_1 };