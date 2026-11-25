# leetcode-solutions

LeetCode solutions, each with a note on the pattern and what tripped me up.

## How I work

- I try each problem alone for 25 minutes before looking at help.
- I only push solutions I can explain line by line.
- I redo each problem the next day without looking.
- Solved shows `alone` or `with help`, with no faking.

## Progress

| #                                                   | Problem                                                                           | Difficulty | Pattern                      | Time | Space      | Solved | First solved | Redone     | Notes                                                          |
| --------------------------------------------------- | --------------------------------------------------------------------------------- | ---------- | ---------------------------- | ---- | ---------- | ------ | ------------ | ---------- | -------------------------------------------------------------- |
| [217](arrays-and-objects/217-contains-duplicate.js) | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)           | Easy       | Frequency counter (Set)      | O(n) | O(n)       | alone  | 2026-11-16   | 2026-11-17 | Overbuilt counts and indexes first; only true/false was needed |
| [1480](arrays-and-objects/1480-running-sum.js)      | [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) | Easy       | Prefix sum                   | O(n) | O(1) extra | alone  | 2026-11-17   |            | Starting at index 1 avoids the i == 0 check                    |
| [242](frequency-counter/242-valid-anagram.js)       | [Valid Anagram](https://leetcode.com/problems/valid-anagram/)                     | Easy       | Frequency counter            | O(n) | O(1)       | alone  | 2026-11-17   |            |                                                                |
| [1](arrays-and-objects/1-two-sum.js)                | [Two Sum](https://leetcode.com/problems/two-sum/)                                 | Easy       | Hash map (complement lookup) | O(n) | O(n)       | alone  | 2026-11-17   |            | Brute force was O(n²); the map brings it to O(n)               |

| [387](frequency-counter/387-first-unique-character-in-a-string.js) | [First Unique Character in a String](https://leetcode.com) | Easy | Hash map (frequency counter / index grouping) | O(n) | O(1) | alone | 2026-11-19 | | JS Map preserves insertion order, so the first entry with length/count 1 is immediately the answer without tracking a minimum index |
| [3005](frequency-counter/3005-count-elements-with-maximum-frequency.js) | [Count Elements With Maximum Frequency](https://leetcode.com/problems/count-elements-with-maximum-frequency) | Easy | Hash Map (frequency counter) | O(n) | O(n) | assisted | 2026-11-22 | Terrible LeetCode wording. You have to find the max frequency (mode count) and sum up all frequencies matching that max (e.g., if two numbers appear 2 times, return 2 + 2 = 4). |
|(frequency-counter/1207-unique-number-of-occurrences.js) | [Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/) | Easy | Hash Map / Frequency Counter / Set | O(n) | O(n) | alone | 2026-11-22 | Super clean use of Set to verify if the frequency counts contain any duplicates. |

|(frequency-counter/347-top-k-frequent-elements.js) | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | Hash Map (frequency counter) + Matrix Sorting | O(n log n) | O(n) | alone | 2026-11-22 | Mastered map-to-array entry sorting. Implemented an advanced fallback tie-breaker constraint directly inside the sort callback. |
| [387](frequency-counter/387-first-unique-character.js) | [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) | Easy | Hash Map (frequency counter) | O(n) | O(1) | FILL | 2026-11-24 | Count every letter first, then scan the string again for the first count of 1. |
| [383](frequency-counter/383-ransom-note.js) | [Ransom Note](https://leetcode.com/problems/ransom-note/) | Easy | Hash Map (frequency counter) | O(m + n) | O(1) | FILL | 2026-11-24 | Count the magazine letters, then spend one for each ransom letter. `!freq[ch]` covers both "never seen" and "used up". |
| [349](frequency-counter/349-intersection-of-two-arrays.js) | [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) | Easy | Set lookup | O(n + m) | O(n) | FILL | 2026-11-24 | Put nums1 in a Set. On a match, save the number and delete it so it is saved only once. |
| [350](frequency-counter/350-intersection-of-two-arrays-ii.js) | [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) | Easy | Hash Map (frequency counter) | O(n + m) | O(n) | FILL | 2026-11-24 | Count nums1, then decrement on each match so duplicates match only as many times as they exist. |
| [169](frequency-counter/169-majority-element.js) | [Majority Element](https://leetcode.com/problems/majority-element/) | Easy | Hash Map (frequency counter) | O(n) | O(n) | FILL | 2026-11-24 | Count each number and return as soon as a count is greater than n/2. |
| [409](frequency-counter/409-longest-palindrome.js) | [Longest Palindrome](https://leetcode.com/problems/longest-palindrome/) | Easy | Hash Map (frequency counter) | O(n) | O(1) | with help (Googled how to count pairs from an odd count) | 2026-11-25 | Take the largest even part of each count with `Math.floor(count / 2) * 2`. If any letter has a leftover, add 1 for the middle. Edge case: "ccc" gives 3. |
| [49](frequency-counter/49-group-anagrams.js) | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | Hash Map + sorted key | O(n × k log k) | O(n × k) | with help (Googled the sorted-key idea) | 2026-11-25 | Sort each word to make a key. Anagrams have the same sorted letters, so they go in the same group. Pattern: use what is the same for every member as the Map key. |
## Planned folders

Folders are created when I solve the first problem in them.

- `arrays-and-objects/`
- `frequency-counter/`
- `multiple-pointers/`
- `sliding-window/`
- `recursion/`
