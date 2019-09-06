let singleton = Symbol();
let singletonEnforcer = Symbol();

class Singleton_1 {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw "Instantiation failed: use Singleton.instance instead of new.";
    }
    // код конструктора
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Singleton_1(singletonEnforcer);
    }
    return this[singleton];
  }

  static set instance(v) {
    throw "Can't change constant property!"
  }
}

class Singleton_2 {
  constructor(name = "") {
    if (Singleton_2.instance) return Singleton_2.instance;
    Singleton_2.instance = this;
    this.name = name;
    return this;
  }

  getName() {
    return this.name;
  }
}

class Ext_Sin_2 extends Singleton_2 {
  shoutName() {
    return this.name.toUpperCase();
  }
}


module.exports = {Singleton_1, Singleton_2, Ext_Sin_2};