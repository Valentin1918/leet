const compose_0 = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg); // cleaner

const compose_1 = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));