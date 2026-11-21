# The joke the reviewer laughs at

[![make.fun · the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/tqhieu1105/joke-reviewer-laughs/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/tqhieu1105/joke-reviewer-laughs/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)

This entry turns a code-review diff into a precise AI coworker failure: the agent puts a destructive SQL command behind a feature flag, but checks the flag after the command has already run. The surprise is visible to a developer in the diff without any explanation.

`main.ts` writes the selected one-line joke as UTF-8 text to `/output/entry.txt`. It creates the output directory when needed and writes exactly one newline-terminated line, staying within the competition's 280-code-point limit.

Run it with Node 22 from the repository root:

```sh
node main.ts
cat /output/entry.txt
```
