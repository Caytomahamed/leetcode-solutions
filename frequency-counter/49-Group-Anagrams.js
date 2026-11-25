/**
 * 49. Group Anagrams
 * Pattern: Map with a shared key
 * Idea: anagrams have the same letters, so sorting the letters of each
 *       word gives the same key. Words with the same key go in one group.
 * Time: O(n * k log k)  (n words, k = longest word length)
 * Space: O(n * k)
 */
var groupAnagrams = function (strs) {
  const groups = new Map();

  for (const word of strs) {
    const key = word.split('').sort().join(''); // "eat" -> "aet"

    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }

  return [...groups.values()];
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([''])); // [[""]]
console.log(groupAnagrams(['a'])); // [["a"]]
