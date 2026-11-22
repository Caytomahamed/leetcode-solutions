/*
 3005. Count Elements With Maximum Frequency
 https://leetcode.com/problems/count-elements-with-maximum-frequency
 Pattern: Hash Map / Frequency Counter
 Idea: Count how many times each number appears using an object. Find the highest repetition count (the mode's frequency). Then, sum up the frequencies of all numbers that hit that maximum.
 Time: O(n) — Loop through array once, then loop through the unique object keys.
 Space: O(n) — To store the counts of up to n unique numbers in the object.
 What tripped me: The terrible LeetCode wording! It sounded like it just wanted unique keys or the mode itself, but it actually forces you to multiply the number of modes by the max frequency (e.g., if 1 and 2 both appear twice, return 2 + 2 = 4).

 Plan:
 1. Create an object to act as a frequency counter.
 2. Loop through `nums` to populate the object with counts.
 3. Find the maximum frequency among all elements.
 4. Loop through the counts again to sum up all frequencies that match the maximum frequency.
 5. Return the total sum.

 Edge cases: All elements are unique ([1,2,3] -> max frequency is 1, return 3), one element dominates ([1,2,2,2,3] -> max frequency is 3, return 3), all elements are identical ([5,5,5] -> max frequency is 3, return 3).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
   const obj = {};

   // 1. Count frequencies
   for(let n of nums) {
     obj[n] = (obj[n] || 0) + 1;
   }

   // Console log to see the counts object
   console.log("Frequencies object:", obj);

   // 2. Find the maximum frequency
   let maxFreq = 0;
   for (let key in obj) {
       if (obj[key] > maxFreq) {
           maxFreq = obj[key];
       }
   }
   console.log("Maximum frequency found:", maxFreq);

   // 3. Sum up all frequencies that match the max frequency
   let totalFrequencies = 0;
   for (let key in obj) {
       if (obj[key] === maxFreq) {
           totalFrequencies += maxFreq;
       }
   }

   return totalFrequencies;
};

