const isAnagram_1 = (s, t) => {
  let str = t, i;
  for (i = 0; i < s.length; i++) {
    const ind = str.indexOf(s[i]);
    if (ind === -1)  return false;
    str = `${str.slice(0, ind)}${str.slice(ind + 1)}`;
  }
  return !str.length;
};

const isAnagram_2 = (s, t) => {
  if (s.length !== t.length) return false;
  for (let i = 0; i < t.length; i++) {
    const ind = s.indexOf(t[i]);
    if (ind === -1) break;
    s = `${s.slice(0, ind)}${s.slice(ind + 1)}`;
  }
  return !s.length;
};

const isAnagram_3 = (s, t) => {
  if (s.length !== t.length) return false;
  const repl = `${s}${t}`.split('').reduce((acc, v, i, arr) => {
    if (i < arr.length / 2) {
      if (acc[v]) {
        acc[v].push(i);
      } else {
        acc[v] = [i];
      }
    } else {
      if (acc[v]) {
        acc[v].pop();
        if (!acc[v].length) delete acc[v];
      }
    }
    return acc;
  }, {});
  return !Object.keys(repl).length;
};


module.exports = { isAnagram_1, isAnagram_2, isAnagram_3 };