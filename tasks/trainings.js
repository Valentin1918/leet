class Singleton {
  constructor(props) {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
    this.props = props;
    return this;
  }

  showProps = () => {
    console.log('showProps', this.props);
  }
}

const sin0 = new Singleton('anal');
const sin1 = new Singleton('bomj');

sin0.showProps();
sin1.showProps();

const myModule = (() => {
  const basket = [];
  return {
    put: value => {
      basket.push(value)
    },
    show: () => [...basket],
  }
})();

myModule.put('tro');
myModule.put('lolo');
const basket = myModule.show();
console.log(basket);
basket.pop();
console.log(basket, myModule.show());