class EE_1 {
  events = {};

  on = (type, cb) => {
    this.events[type] ? this.events[type].push(cb) : this.events[type] = [cb];
  };

  once = (type, cb) => {
    const unCb = i => (...args) => {
      this.events[type] = this.events[type].slice(0, i).concat(this.events[type].slice(i + 1));
      cb.apply(null, args);
    };

    this.events[type] ? this.events[type].push(unCb(this.events[type].length)) : this.events[type] = [unCb(0)];
  };

  emit = (type, ...args) => {
    if (!this.events[type]) return;
    this.events[type].forEach(cb => {
      cb.apply(null, args);
    })
  }
}

const myEE_1 = new EE_1();
myEE_1.on('TROL', () => console.log('this is TROL 1'));
myEE_1.on('TROL', () => console.log('this is TROL 2'));
myEE_1.on('TROL', () => console.log('this is TROL 3'));
myEE_1.on('TROL', () => console.log('this is TROL 5'));
myEE_1.once('TROL', () => console.log('this is TROL 4'));

myEE_1.emit('TROL');
myEE_1.emit('TROL');
myEE_1.emit('TROL');
myEE_1.emit('TROLOLO');