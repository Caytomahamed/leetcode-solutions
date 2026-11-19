# leetcode-solutions

LeetCode solutions, each with a note on the pattern and what tripped me up.

## How I work

- I try each problem alone for 25 minutes before looking at help.
- I only push solutions I can explain line by line.
- I redo each problem the next day without looking.
- Solved shows `alone` or `with help`, with no faking.

## Progress

| # | Problem | Difficulty | Pattern | Time | Space | Solved | First solved | Redone | Notes |
|---|---------|------------|---------|------|-------|--------|--------------|--------|-------|
| [217](arrays-and-objects/217-contains-duplicate.js) | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | Frequency counter (Set) | O(n) | O(n) | alone | 2026-11-16 | 2026-11-17 | Overbuilt counts and indexes first; only true/false was needed |
| [1480](arrays-and-objects/1480-running-sum.js) | [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) | Easy | Prefix sum | O(n) | O(1) extra | alone | 2026-11-17 | | Starting at index 1 avoids the i == 0 check |
| [242](frequency-counter/242-valid-anagram.js) | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Easy | Frequency counter | O(n) | O(1) | alone | 2026-11-17 | | |
| [1](arrays-and-objects/1-two-sum.js) | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | Hash map (complement lookup) | O(n) | O(n) | alone | 2026-11-17 | | Brute force was O(n²); the map brings it to O(n) |

| [387](frequency-counter/387-first-unique-character-in-a-string.js) | [First Unique Character in a String](https://leetcode.com) | Easy | Hash map (frequency counter / index grouping) | O(n) | O(1) | alone | 2026-11-19 | | JS Map preserves insertion order, so the first entry with length/count 1 is immediately the answer without tracking a minimum index |


## Planned folders

Folders are created when I solve the first problem in them.

- `arrays-and-objects/`
- `frequency-counter/`
- `multiple-pointers/`
- `sliding-window/`
- `recursion/`