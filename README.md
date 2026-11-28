# leetcode-solutions

LeetCode solutions, each with a note on the pattern and what tripped me up.

## How I work

- I try each problem alone for 25 minutes before looking at help.
- I only push solutions I can explain line by line.
- I redo each problem the next day without looking.
- Solved shows `alone` or `with help`, with no faking.

## Progress

| # | Problem | Difficulty | Pattern | Time | Space | Solved | First solved | Redone | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [217](arrays-and-objects/217-contains-duplicate.js) | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | Frequency counter (Set) | O(n) | O(n) | alone | 2026-11-16 | 2026-11-17 | Overbuilt counts and indexes first; only true/false was needed |
| [1480](arrays-and-objects/1480-running-sum.js) | [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) | Easy | Prefix sum | O(n) | O(1) extra | alone | 2026-11-17 | | Starting at index 1 avoids the i == 0 check |
| [1](arrays-and-objects/1-two-sum.js) | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | Hash map (complement lookup) | O(n) | O(n) | alone | 2026-11-17 | | Brute force was O(n²); the map brings it to O(n). Add to the map after the check |
| [242](frequency-counter/242-valid-anagram.js) | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Easy | Frequency counter | O(n) | O(1) | alone | 2026-11-17 | | Different lengths can never be anagrams, so check length first |
| [1207](frequency-counter/1207-unique-number-of-occurrences.js) | [Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/) | Easy | Hash map (frequency counter) + Set | O(n) | O(n) | alone | 2026-11-22 | | Count each number, then a Set of the counts shows if any count repeats |
| [3005](frequency-counter/3005-count-elements-with-maximum-frequency.js) | [Count Elements With Maximum Frequency](https://leetcode.com/problems/count-elements-with-maximum-frequency/) | Easy | Hash map (frequency counter) | O(n) | O(n) | with help | 2026-11-22 | | Find the max frequency, then add up the frequencies equal to it (two numbers with count 2 gives 4) |
| [347](frequency-counter/347-top-k-frequent-elements.js) | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | Hash map (frequency counter) + sort | O(n log n) | O(n) | alone (Map + sort) | 2026-11-22 | | Sorted the Map entries by count. Learned bucket sort (O(n)) from Google; redo it after the sorting section |
| [387](frequency-counter/387-first-unique-character-in-a-string.js) | [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) | Easy | Hash map (frequency counter) | O(n) | O(1) | alone | 2026-11-19 | 2026-11-27 | Count every letter first, then scan again for the first count of 1 |
| [383](frequency-counter/383-ransom-note.js) | [Ransom Note](https://leetcode.com/problems/ransom-note/) | Easy | Hash map (frequency counter) | O(m + n) | O(1) | alone | 2026-11-24 | 2026-11-27 | Count the magazine, spend one per note letter. A note longer than the magazine can exit early |
| [349](frequency-counter/349-intersection-of-two-arrays.js) | [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) | Easy | Set lookup | O(n + m) | O(n) | alone (Googled Map values) | 2026-11-24 | | Set of nums1; on a match, save the number and delete it so it is saved once |
| [350](frequency-counter/350-intersection-of-two-arrays-ii.js) | [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) | Easy | Hash map (frequency counter) | O(n + m) | O(n) | alone (Googled Map values) | 2026-11-24 | | Count nums1, subtract on each match, so each number matches the smaller of the two counts |
| [169](frequency-counter/169-majority-element.js) | [Majority Element](https://leetcode.com/problems/majority-element/) | Easy | Hash map (frequency counter) | O(n) | O(n) | alone (Googled Map values) | 2026-11-24 | | Count each number and return as soon as a count is greater than n/2 |
| [409](frequency-counter/409-longest-palindrome.js) | [Longest Palindrome](https://leetcode.com/problems/longest-palindrome/) | Easy | Hash map (frequency counter) | O(n) | O(1) | with help (Googled the pairs formula) | 2026-11-25 | | Take the pairs of each count with `Math.floor(count / 2) * 2`; add 1 if any letter has a leftover |
| [49](frequency-counter/49-group-anagrams.js) | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | Hash map + sorted key | O(n × k log k) | O(n × k) | with help (Googled the sorted-key idea) | 2026-11-25 | | Sort each word to make a key. Same key means same group |


## Planned folders

Folders are created when I solve the first problem in them.

- `arrays-and-objects/`
- `frequency-counter/`
- `multiple-pointers/`
- `sliding-window/`
- `recursion/`
