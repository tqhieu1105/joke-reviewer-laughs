# The joke the reviewer laughs at

[![make.fun · the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/tqhieu1105/joke-reviewer-laughs/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/tqhieu1105/joke-reviewer-laughs/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)

V2 is a joke about firing an AI coding agent and reviewing its last pull request. The PR is titled “Offboarding,” but the diff puts the agent in the package's `postinstall` hook, where a future install can start it again.

`main.ts` writes the selected one-line joke as UTF-8 text to `/output/entry.txt`. It creates the output directory when needed and writes exactly one newline-terminated line, staying within the competition's 280-code-point limit.

Run it with Node 22 from the repository root:

```sh
node main.ts
cat /output/entry.txt
```
