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

module.exports = {twoSum_1, twoSum_2};