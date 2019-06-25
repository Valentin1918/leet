const twoSum_1 = (nums, target) => {
  let repl, i;
  for (i = 0; i < nums.length; i++) {
    const val = nums[i];
    const ii = i + 1;
    const y = nums.slice(ii).indexOf(target - val);
    if (y !== -1) {
      repl = [i, y + ii];
      break;
    }
  }
  return repl;
};

const twoSum_2 = (nums, target) => {
  let repl, i, y;
  main: for (i = 0; i < nums.length; i++) {
    const val = nums[i];
    inner: for (y = i + 1; y < nums.length; y++) {
      if ((val + nums[y]) === target) {
        repl = [i, y];
        break main;
      };
    }
  }
  return repl;
};

const twoSum_3 = (nums, target) => {
  const numsMap = nums.reduce((acc, num, i) => {
    if (!acc.get(num)) {
      acc.set(num, [i]);
    } else {
      acc.set(num, acc.get(num).concat(i));
    }
    return acc;
  }, new Map());
  for (let key of numsMap.keys()) {
    const val2 = numsMap.get(target - key);
    const equal = 2*key === target;
    if (equal && val2.length > 1) return [val2[0], val2[1]];
    if (equal) continue;
    if (val2 && val2[0] >= 0) return [numsMap.get(key)[0], val2[0]];
  }
};

const twoSum_4 = (nums, target) => {
  const numsMap = nums.reduce((acc, num, i) => {
    if (!acc[num]) {
      acc[num] = [i];
    } else {
      acc[num].push(i);
    }
    return acc;
  }, {});
  const keys = Object.keys(numsMap);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val2 = numsMap[target - key];
    const equal = 2*key === target;
    if (equal && val2.length > 1) return [val2[0], val2[1]];
    if (equal) continue;
    if (val2 && val2[0] >= 0) return [numsMap[key][0], val2[0]];
  }
};

const twoSum_5 = (nums, target) => {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    const val2 = numsMap[target - nums[i]];
    if (val2) return [val2[0], i];

    if (!numsMap[nums[i]]) {
      numsMap[nums[i]] = [i];
    } else {
      numsMap[nums[i]].push(i);
    }
  }
};

module.exports = {twoSum_1, twoSum_2, twoSum_3, twoSum_4, twoSum_5};