/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // make map and stored on each arra on its count
  const groups = new Map();

  // loop through all string and stored the count
  for (const str of strs) {
    // 1. Sort the string to create a uniform key (e.g., "tea" -> "aet")
    const sortedKey = str.split('').sort().join('');

    // 2. If the key doesn't exist, initialize an empty array
    if (!groups.has(sortedKey)) {
      groups.set(sortedKey, []);
    }

    // 3. Push the full original string into the array
    groups.get(sortedKey).push(str);
  }

  return [...groups.values()]
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
