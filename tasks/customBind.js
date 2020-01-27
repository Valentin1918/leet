const bind_0 = (cd, context) => (...args) => cd.apply(context, args);

const bind_1 = function(cd, context) {
  return function() {
    return cd.apply(context, arguments);
  }
};

const myF = function (someArg) {
  console.log('this is', this.props, someArg);
};
const my0 = bind_0(myF, { props: 'opop' });
my0(111);
const my1 = bind_1(myF, { props: 'opop' });
my1(222);
