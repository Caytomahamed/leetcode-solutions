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
