/*
 1207. Unique Number of Occurrences
 https://leetcode.com/problems/unique-number-of-occurrences/
 Pattern: Hash Map / Frequency Counter / Set
 Idea: Count how many times each number appears using an mapect. Extract all the frequency counts, and put them into a Set. Since a Set only holds unique values, if the Set size matches the original frequency length, all occurrences are unique.
 Time: O(n) — Loop through the array once to count, then O(n) to create the Set.
 Space: O(n) — To store the counts and the unique frequencies in memory.
 What tripped me: Nothing! The logic flowed straight from the frequency counter pattern. Converting the mapect values into a Set is a super clean way to check for duplicate frequencies without nested loops.

 Plan:
 1. Create an mapect to act as a frequency counter.
 2. Loop through `arr` to store each element and its count.
 3. Grab all the counts using `mapect.values(map)`.
 4. Compare the `Set.size` of those counts against the total `length` of the counts array.
 5. Return true if they match, false if they don't.

 Edge cases: All elements have the same frequency ([1,2] -> counts [1,1] -> false), all frequencies are unique ([1,2,2,3,3,3] -> counts [1,2,3] -> true), negative numbers included ([-3,0,1,-3,1,1,1,-3,10,0] -> true).
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // make map store on each element and its count
  const map = new Map();
  // loop throught arr and  stored the element and count
  for (let n of arr) map[n] = (map[n] || 0) + 1;

  // if element have some duplicate return false if not return true
  const size = new Set(map.values()).size;

  return map.size === size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
