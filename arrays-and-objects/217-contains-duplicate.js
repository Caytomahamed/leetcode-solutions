/*
 217. Contains Duplicate (Easy)
 https://leetcode.com/problems/contains-duplicate/
 Pattern: frequency counter (Set)
 Idea: a Set drops repeats, so if its size is smaller than the array, a duplicate existed.
 Time: O(n)   Space: O(n)
 What tripped me: I overbuilt counts and indexes the problem never asked for; only true/false is needed.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
