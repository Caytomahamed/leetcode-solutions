/**
 * 409. Longest Palindrome
 * Pattern: frequency counter
 * Idea: a palindrome is made of pairs, plus at most one letter in the middle.
 *       Count each letter and take its pairs. If any letter has a leftover,
 *       add 1 for the middle.
 * Time: O(n)  Space: O(1) (the Map holds at most 52 letters, a fixed number)
 */
var longestPalindrome = function (s) {
  const freq = new Map();

  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  let length = 0;
  let hasLeftover = false;

  for (const count of freq.values()) {
    length += Math.floor(count / 2) * 2; // letters that make pairs
    if (count % 2 !== 0) hasLeftover = true; // one letter is left over
  }

  return hasLeftover ? length + 1 : length;
};

console.log(longestPalindrome('abccccdd')); // 7
console.log(longestPalindrome('a')); // 1
console.log(longestPalindrome('ccc')); // 3
