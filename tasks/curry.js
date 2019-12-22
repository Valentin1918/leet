const slice = Array.prototype.slice;

const bind = function(fn, context, args1) {
  return function() {
    const args2 = slice.call(arguments);
    return fn.apply(context, args1.concat(args2));
  };
};

const curry_0 = function(fn) {
  return function() {
    if(arguments.length < fn.length) return curry_0(fn.bind(this, ...arguments));
    fn.apply(this, arguments);
  }
};

const curry_1 = function(fn) {
  return function curried() {
    const args1 = slice.call(arguments);
    if(args1.length < fn.length) return bind(curried, this, args1);
    fn.apply(this, arguments);
  }
};

const curry_2 = function(fn) {
  return function curried() {
    const args1 = slice.call(arguments);
    if(args1.length < fn.length) {
      return function() {
        const args2 = slice.call(arguments);
        return curried.apply(this, args1.concat(args2));
      }
    }
    fn.apply(this, arguments);
  };
};

module.exports = { curry_0, curry_1, curry_2 };
