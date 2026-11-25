/*
 347. Top K Frequent Elements
 https://leetcode.com/problems/top-k-frequent-elements/
 Pattern: Hash Map (Frequency Counter) + Array Matrix Sorting
 Idea: Store elements and their counts in a Map. Convert the Map into an array of [key, value] pairs, sort those pairs descending by value (frequency), and use a tie-breaker for identical counts. Map back to keys and slice the top K.
 Time: O(n log n) — Due to sorting the unique entry pairs.
 Space: O(n) — To store frequencies and the entries array in memory.
 What tripped me: Sorting an array of arrays ([key, value]). Remembering that index 1 handles the frequency sorting while index 0 handles the optional tie-breaker logic.

 Plan:x
 1. Initialize a Map to count occurrences.
 2. Loop through `nums` to populate counts.
 3. Spread the map into an array of entries `[...map]`.
 4. Sort entries by frequency (`b[1] - a[1]`) with an optional numeric tie-breaker (`a[0] - b[0]`).
 5. Extract just the keys using `.map(([key]) => key)` and return the top `k` elements using `.slice(0, k)`.

 Edge cases: Single element arrays, negative numbers present, or multiple elements tying for the exact same top frequency.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // make map to stored the element and counts
  const map = new Map();

  // loop through the element and store map
  for (let n of nums) map.set(n, (map.get(n) || 0) + 1);

  // Convert map to entries matrix, sort by frequency, extract keys
  const sortedKeys = [...map]
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .map(([key]) => key);

  // return the top k elements
  return sortedKeys.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [ 1, 2 ]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // [ -1, 2 ]
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)); // [ 1, 2 ]
console.log(topKFrequent([3, 0, 1, 0], 1)); // [ 0 ]


// BETTER
/**
 * 347. Top K Frequent Elements
 * Pattern: Hash Map (Frequency Counter) + Bucket Sort
 * Idea: Count frequencies, then place each distinct number into a bucket
 *       indexed by its frequency. Walk buckets from highest frequency down,
 *       collecting numbers until we have k.
 * Time: O(n) — counting is O(n), bucketing is O(d), draining is O(d).
 * Space: O(n) — buckets array of length n+1.
 */
// var topKFrequent = function (nums, k) {
//   // 1. Count frequencies
//   const count = new Map();
//   for (const n of nums) count.set(n, (count.get(n) || 0) + 1);

//   // 2. Build buckets: buckets[freq] = [numbers appearing freq times]
//   //    Length = n + 1 because max possible frequency is n (all same element)
//   const buckets = Array.from({ length: nums.length + 1 }, () => []);
//   for (const [num, freq] of count) {
//     buckets[freq].push(num);
//   }

//   // 3. Drain from highest frequency down until we have k elements
//   const res = [];
//   for (let freq = buckets.length - 1; freq >= 0 && res.length < k; freq--) {
//     for (const num of buckets[freq]) {
//       res.push(num);
//       if (res.length === k) break;
//     }
//   }

//   return res;
// };

// // Tests
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));              // [1, 2] or [2, 1]
// console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));         // [-1, 2] or [2, -1]
// console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));  // [1, 2] or [2, 1]
// console.log(topKFrequent([3, 0, 1, 0], 1));                    // [0]