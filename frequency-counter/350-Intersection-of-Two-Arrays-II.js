/**
 * 350. Intersection of Two Arrays II
 * Pattern: frequency counter
 * Idea: count nums1. For each number in nums2 with count > 0, save it
 *       and subtract 1, so duplicates match only as many times as they exist.
 * Time: O(n + m)  Space: O(n)
 */
var intersect = function (nums1, nums2) {
  const freq = {};
  const result = [];

  for (const n of nums1) {
    freq[n] = (freq[n] || 0) + 1;
  }

  for (const n of nums2) {
    if (freq[n] > 0) {
      result.push(n);
      freq[n]--;
    }
  }

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9] (any order)

// NOTE: MY SOLUTION
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersect = function (nums1, nums2) {
//   // create 2 set and frist stored to nums1 to remove duplicat
//   const freq = {};
//   const result = [];

//   // count num1
//   for (const n of nums1) {
//     freq[n] = (freq[n] || 0) + 1;
//   }

//   //loop through the nums1 to stored obj
//   for (const n of nums2) {
//     if (freq[n]) {
//       result.push(n);
//       freq[n]--;
//     }
//   }

//   return result;
// };

// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
