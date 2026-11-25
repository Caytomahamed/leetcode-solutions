/**
 * 169. Majority Element
 * Pattern: frequency counter
 * Idea: count each number. The majority appears more than n / 2 times,
 *       so return as soon as a count passes half.
 * Time: O(n)  Space: O(n)
 */
var majorityElement = function (nums) {
  const freq = new Map();
  const half = nums.length / 2;

  for (const n of nums) {
    const count = (freq.get(n) || 0) + 1;
    freq.set(n, count);
    if (count > half) return n;
  }
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

// NOTE: MY SOLUTION
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function (nums) {
//   // make the oject
//   const freq = new Map();
//   let maxCount = 0;
//   let majorityN = 0
//   // lop nums and stored object

//   for (const n of nums) {
//     const count = (freq.get(n) || 0) + 1;
//     freq.set(n, count );

//     if(count > maxCount){
//         maxCount = count;
//         majorityN = n
//     }
//   }
//   console.log(freq.values);
//   // return hight value using math max

//   return majorityN;

// };

// console.log(majorityElement([3, 2, 3]));
