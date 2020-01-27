const shallowCompare = (obj1, obj2) => {
  const k1 = Object.keys(obj1);
  const k2 = Object.keys(obj2);
  if (k1.length !== k2.length) return false;
  return k1.every(key => {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') return true;
    return obj1[key] === obj2[key];
  });
};

const deepCompare = (obj1, obj2) => {
  const k1 = Object.keys(obj1);
  const k2 = Object.keys(obj2);
  if (k1.length !== k2.length) return false;
  return k1.every(key => {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      return deepCompare(obj1[key], obj2[key]);
    }
    return obj1[key] === obj2[key];
  });
};

const myObj0 = {
  myObj: {
    rr: 44,
    ss: '3ddf',
    dsdf: {
      rr: 44,
      ss: '3ddf',
      dddd: {
        rr: 44,
        ss: '3ddf',
        tyrt: {
          rr: 44,
          ss: '3ddf',
          hgfgfd: {
            rr: 44,
            ss: '3ddf',
            fgdg: {
              rr: 44,
              ss: 'tttttt',
            }
          }
        }
      },
      tyrt: {
        rr: 44,
        ss: '3ddf',
        hgfgfd: {
          rr: 44,
          ss: '3ddf',
          fgdg: {
            rr: 44,
            ss: '3ddf',
          }
        }
      }
    }
  }
};

const myObj1 = {
  myObj: {
    rr: 44,
    ss: '3ddf',
    dsdf: {
      rr: 44,
      ss: '3ddf',
      dddd: {
        rr: 44,
        ss: '3ddf',
        tyrt: {
          rr: 44,
          ss: '3ddf',
          hgfgfd: {
            rr: 44,
            ss: '3ddf',
            fgdg: {
              rr: 44,
              ss: '3ddf',
            }
          }
        }
      },
      tyrt: {
        rr: 44,
        ss: '3ddf',
        hgfgfd: {
          rr: 44,
          ss: '3ddf',
          fgdg: {
            rr: 44,
            ss: '3ddf',
          }
        }
      }
    }
  }
};

const myObj2 = Object.assign({aaa: 'ddd'}, myObj1);
const myObj3 = Object.assign({}, myObj1);

console.log(shallowCompare(myObj1, myObj2));
console.log(shallowCompare(myObj1, myObj3));
console.log(shallowCompare(myObj1, myObj0));

console.log(deepCompare(myObj1, myObj2));
console.log(deepCompare(myObj1, myObj3));
console.log(deepCompare(myObj1, myObj0));
