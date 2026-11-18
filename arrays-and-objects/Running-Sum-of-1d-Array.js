/*
 1480. Running Sum of 1d Array
 https://leetcode.com
 Pattern: Prefix Sum (In-Place)
 Idea: Iterate through the array and add the previous element's running total to the current element.
 Time: O(n)   Space: O(1)
 What tripped me: Starting the loop at index 0 requires an extra check (i == 0). Starting at index 1 avoids that check completely.

  Plan:
 1. Each element = itself + the running total before it
 2. Start at index 1, since index 0 stays the same
 3. Update in place, then return
 Edge cases: one element, negatives
*/

var runningSum = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]
console.log(runningSum([5]));            // [5]
console.log(runningSum([-1, 2, -3]));    // [-1, 1, -2]
