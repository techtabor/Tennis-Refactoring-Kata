## Tennis Refactoring Kata

You find a correctly working program in `javascript/TennisGame.js` which prints the current status of a Tennis game according to its rules.

The goal is to make the code cleaner (more readable, more elegant) while keeping the same functionality. You can check this by passing all existing tests. This process is called *refactoring*.

The three most important files in this repository:

- `javascript/TennisGame.js`: code for main program
- `javascript/TennisTest.js`: code for testing main program
- `javascript/TennisTest.html`: visualizing test runs for main program

First step: Download repository as ZIP and extract, or if you have git installed,

`git clone https://github.com/techtabor/Tennis-Refactoring-Kata.git`

Then:

- open `javascript/TennisTest.html` in your browser
- modify `javascript/TennisGame.js`
- refresh your browser after every modification (`Ctrl + r` in Chrome on Windows)

Mainly you should modify the internals of the `TennisGame.prototype.getScore` function. You can also add new functions or modify the `TennisGame` class, but do NOT modify the tests or other functions.

Work in pairs using one laptop.

----------------------------------------------

### Refactoring

Programmers spend much more time reading code than writing code so it is really important that the code is understandable by reading it. For example, you read a lot of code during debugging, taking over a project, learning a new technology, building on top of someone else's solution, revisiting your own code from two months ago, etc.

#### Qualities of clean code

- easy to understand: (even without comments)
- easy to modify (it is natural that needs, requirements are changing)
- easy to extend (code will usually evolve, support more requirements)
- difficult to accidentally mess up

#### Guidance for refactoring

- name variables and functions with names close to jow you would speak about it in natural language
- each piece of business logic should be represented by exactly one piece of code
- each function should do one thing (easier to name if this is true!)
- simplest working and understandable solution
- clear entry point, gradually more details inside functions
- shortest is not always the simplest or most understandable
- you do not have to understand every details before starting to refactor
- refactor in small steps, never rewrite from scratch

---------------------------------------------

### Summary of the rules of tennis (not necessary for refactoring)

1. A game is won by the first player to have won at least 4 points in total and at least 2 points more than the opponent.
2. The running score of each game is described in a manner peculiar to tennis: scores from 0 to 3 points are described as "Love", "Fifteen", "Thirty", and "Forty" respectively.
3. If at least 3 points have been scored by each player, and the scores are equal, the score is "Deuce".
4. If at least 3 points have been scored by each side and a player has one more point than his opponent, the score of the game is "Advantage" for the player in the lead.


-----------------------------------------

Forked from `emilybache/Tennis-Refactoring-Kata`.
