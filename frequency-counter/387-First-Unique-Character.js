/**
 * 387. First Unique Character in a String
 * Pattern: frequency counter
 * Idea: count every letter first, then find the first letter with count 1.
 * Time: O(n)  Space: O(1) (max 26 letters)
 */
var firstUniqChar = function (s) {
  const freq = new Map();

  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) return i;
  }

  return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('aabb')); // -1

// NOTE: MY SOLUCITON
// const firstUniqChar = (s) => {
//   const freq = {};

//   for (const char of s) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (freq[s[i]] === 1) {
//       return i;
//     }
//   }

//   return -1;
// };

// console.log(uniqueChar("leedcode")); // 0
