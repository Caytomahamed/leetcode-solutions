/**
 * 383. Ransom Note
 * Pattern: frequency counter
 * Idea: count the magazine letters, then spend one for each ransom letter.
 * Time: O(m + n)  Space: O(1) (max 26 letters)
 */
var canConstruct = function (ransomNote, magazine) {
  const freq = {};

  for (const ch of magazine) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (const ch of ransomNote) {
    if (!freq[ch]) return false; // never seen, or already used up
    freq[ch]--;
  }

  return true;
};

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true

// NOTE: MY SOLUTION
// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */
// var canConstruct = function (ransomNote, magazine) {
// //  if()
//   // make obj freq and stored the count of magazine
//   const freq = {};

//   // loop magazine and stored to freq
//   for (const char of magazine) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   // loop througt ransomNote to check if thier freq
//   for (const char of ransomNote) {
//     // if not their or freq[char] = 0 return false
//     if (!freq[char]) return false;
//     // if there decremented
//     freq[char]--;
//   }

//   return true;
// };

// console.log(canConstruct('a', 'b'));
// console.log(canConstruct('aa', 'ab'));
// console.log(canConstruct('aa', 'aab'));
