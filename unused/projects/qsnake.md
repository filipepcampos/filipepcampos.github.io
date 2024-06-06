---
title: Q-Snake
---


{{< hint danger >}}
**Warning:** this page is still under construction.
{{< /hint >}}

# Q-Snake 🐍

The objective of this project was to replicate the famous Snake game and implement an intelligent agent, based on **Q-Learning**, to automatically play the game.

## Reinforcement Learning

While the Snake game itself needs no introduction, Q-Learning does. And, to better frame what Q-Learning is we must take a step back and analyze the characteristics of Reinforcement Learning, the family of algorithms it belongs to.

In essence, a Reinforcement Learning environment has four key characteristics: an **action space**, an **observation space**, a **policy** and a **reward function**. An agent first observes the current state of the environment (included in the observation space) and based on the current policy chooses an action to take (from the action space). The best action for each state is learned based on the reward function which incentivizes the agent to do what we want.

In particular, Q-Learning works for environments which have both a **discrete** action space and a **discrete** observation state. The algorithm considers that there is a limited amount of actions an agent can take and a limited amount of states the environment can be in and, therefore, describes a policy as a table which for each (action, state) combination has a specific expected reward.

| State | Action 1 | Action 2 | Action 3 |
| ---- | ---- | --- | --- |
| State 1 | 0.3 | 0.1 | 0.01 |
| State 2 | 0.02 | 0.5 | 0.21 |
| State 3 | 0.7 | 0.3 | 0.17 |

## Creating the Observation Space

One issue with the Q-Learning approach, is that it requires a "row" for each possible game state. If we take the naive approach of including all specifying every single game tile in the state, the size of the observation space will quickly spiral out of control, taking both longer to train and more memory consuming.

### Why not represent the entire board

Let's consider a Snake game with {{< katex >}} 32 \times 32 {{< /katex >}} tiles and no obstacles. When the game starts our snake will occupy {{< katex >}} 1 {{< /katex >}} out of the {{< katex >}} 1024 {{< /katex >}} available tiles, for each of those positions a piece of food will appear in one of the remaining {{< katex >}} 1023 {{< /katex >}} tiles.

So for the first scenario we are faced with:
{{< katex display=true >}} 1024 \times 1023 = 1,047,552\; \text{unique states}  {{< /katex >}}

If we consider that our snake has grown to occupy {{<katex>}} 2 {{< /katex >}} tiles there will be roughly  {{<katex>}} 1024 \times 4 = 4096  {{< /katex >}} possible configurations (not exactly since when the snake is against the walls the 2nd block can only occupy three possible positions but it's easier to simplify). Adding the food tile we get an additional {{<katex>}} 4096 \times 1022 = 4,186,112 {{</katex>}} possible states.

So for a snake that can only grow to 2 tiles long we would already have a table with {{<katex>}} (1,047,552 + 4,186,112) \times 4 = 20,934,656 {{</katex>}} elements. Considering 32-bit floating values, this would already occupy {{<katex>}} 83.7\, \text{MB} {{</katex>}}, and we haven't gotten to the explosion of possibilities that occurs as the snake grows longer.

Very roughly, the total number of states for a snake of size up to {{< katex >}} K {{< /katex >}} is given by:
{{< katex display=true >}}
    \sum_{i=0}^{K} 1024 \times 3^i \times (1023 - i) = ...
{{< /katex>}}

For K=12...


### What can we do instead
Instead, we can summarize the state information in a smaller set of characteristics.

Each state is initially obtained as an binary 10 bit number, and afterwards converted to an decimal number
**0000_0000_00** to **1111_1111_11** (0 to 1023 in decimal)
The bit groups correspond to Danger, Food and Direction.

**Danger**: Corresponds to 4 boolean values associated with the danger in the positions adjacent to the player (up, down, left, right)

**Food**: Corresponds to the relative position of the food compared to the player. (up, down, left, right).

**Direction**: 2 bit number corresponding to the direction of the player movement. `00: up`, `01: down`, `10: left`, `11: right`

This gives a small Q-Table which contains only 1024 * 4 elements.

## Something else

{{< katex display=true >}}
\text{NewQ}(s, a) = \text{Q}(s,a) + \alpha [R(s,a) + \gamma \max \text{Q}'(s', a') - \text{Q}(s, a)]
{{< /katex >}}