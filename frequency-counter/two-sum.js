/*
 Two Sum
https://leetcode.com/problems/two-sum/
 Pattern: Hash map (complement lookup
 Idea: For each number, look up target - number in a map of numbers I've already seen. If found, return both indexes; otherwise store this number.
 Time: O(n)   Space: O(n)
 What tripped me: this first idea  Create two pointer when slow and when is fast and check on each time slow plus fast is equal target and return 2 index. but is becomie time n^2. we going using map seen and loop going through using maths insteed slow + fast = target to need = target - slow

  Plan:
 1. Create map to stored to seen element
 2. Loop through  Check previous numbers FIRST
 3. Add the current number AFTER

    Edge cases: duplicate numbers (3, 3 with target 6), negative numbers, the answer using the first and last items.
*/

var twoSum = function (nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    // 1. Check previous numbers FIRST
    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    // 2. Add the current number AFTER checking
    seen.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
