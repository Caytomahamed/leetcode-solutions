/**
 * 349. Intersection of Two Arrays
 * Pattern: Set lookup
 * Idea: put nums1 in a Set. For each number in nums2 that is in the Set,
 *       save it and delete it, so it is saved only once.
 * Time: O(n + m)  Space: O(n)
 */
var intersection = function (nums1, nums2) {
  const seen = new Set(nums1);
  const result = [];

  for (const n of nums2) {
    if (seen.has(n)) {
      result.push(n);
      seen.delete(n);
    }
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]

// NOTE: MY SOLUTION
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersection = function (nums1, nums2) {
//   // create 2 set and frist stored to nums1 to remove duplicat
//   const set1 = new Set(nums1);
//   const result = new Set();
//   const freq = {};
//   //loop through the nums1 to stored obj
//   for (const n of nums2) {
//     if (set1.has(n)) result.add(n);
//   }

//   return [...result];
// };

// console.log(intersection([1, 2, 2, 1], [2, 2]));
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
