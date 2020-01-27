const deepFreeze = obj => {
  Object.freeze(obj);
  Object.values(obj).forEach(value => {
    if (typeof value === 'object') deepFreeze(value);
  });
  return obj;
};

const myObj = {
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

const coldObj = deepFreeze(myObj);
myObj.myObj.dsdf.rr = 666;
coldObj.myObj.dsdf.rr = 666;
myObj.myObj.dsdf.dddd.tyrt.hgfgfd.ss = 'some shit';
coldObj.myObj.dsdf.dddd.tyrt.hgfgfd.ss = 'some shit';

console.log(myObj.myObj.dsdf.rr, coldObj.myObj.dsdf.rr);
console.log(myObj.myObj.dsdf.dddd.tyrt.hgfgfd.ss, coldObj.myObj.dsdf.dddd.tyrt.hgfgfd.ss);