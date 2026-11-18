/*
 Valid Anagram
https://leetcode.com/problems/valid-anagram/description/
 Pattern: Frequency counter
 Idea: Count each letter of s in an object, then walk t and use up those counts. If a letter is missing or its count is 0, return false.
 Time: O(n)   Space: O(1)
 What tripped me:I wrote the length check first and had to think about why it’s needed

  Plan:
 1. Check if the same  length if not return false else wise contine next step
 2. Loop through s and count each character in an object. and
 3. Loop through t; if a character has no count left, return false, otherwise subtract 1.

    Edge cases: different lengths, same letters with different counts, a single character
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let counts = {};

  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (const char of t) {
    if (!counts[char]) return false;
    counts[char]--;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('a', 'a')); // true
console.log(isAnagram('aab', 'abb')); // false
