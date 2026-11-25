/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const freq = new Map();
  let countPalindrome = 0;
  let hasOddCount = false;

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (const count of freq.values()) {
    // Math.floor(count / 2) * 2 gives you the largest even number less than or equal to count
    // e.g., if count is 3: 3 / 2 = 1.5 -> floor is 1 -> 1 * 2 = 2.
    countPalindrome += Math.floor(count / 2) * 2;

    // If there is any leftover odd remainder, we track it
    if (count % 2 !== 0) {
      hasOddCount = true;
    }
  }

  // If we found at least one odd character frequency,
  // we can place exactly one unique character in the dead center.
  if (hasOddCount) {
    countPalindrome += 1;
  }

  return countPalindrome;
};

console.log(longestPalindrome('abccccdd')); // Output: 7 (e.g., "dccaccd")
console.log(longestPalindrome('a')); // Output: 1
console.log(longestPalindrome('ccc')); // Output: 3 (Uses all 3)
