/*
 387. First Unique Character in a String
 https://leetcode.com/problems/first-unique-character-in-a-string/
 Pattern: Hash map (frequency counter / index grouping)
 Idea: Loop through the string and map each character to an array of its indices (or its count). Then find the first character that only appeared once and return its index.
 Time: O(n)   Space: O(1) — at most 26 lowercase English letters
 What tripped me: Tried spreading `counts.get(s[i])` before initializing it, which failed on `undefined`. Also thought I needed to compare all unique characters to find the minimum index, forgetting that JS `Map` preserves insertion order.

 Plan:
 1. Create a Map to store each character and its indices (or frequency)
 2. Loop through the string to populate the Map
 3. Loop through the Map (or string) to find the first character with length/count of 1
 4. Return its index, or -1 if none exists

 Edge cases: all repeating characters ("aabb" -> -1), single character string ("z" -> 0), unique character at the very end ("aabbz" -> 4).
*/

var firstUniqChar = function (s) {
  const counts = new Map();

  for (i = 0; i < s.length; i++) {
    if (!counts.has(s[i])) {
      counts.set(s[i], []);
    }
    counts.get(s[i]).push(i);
  }

  let firstUniq;
  for ([key, value] of counts) {
    if (value.length == 1) {
      return value;
    }
  }

  return firstUniq ?? -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
