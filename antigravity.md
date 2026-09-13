# Overview

This project aims to show the implementation of a unary number system. Read `math.js` for how the number system works.
It will consist of a single page.

## Structure of the page

### Section 1: Base-10 to Unary Converter
Input box: that can take a number in Base10 and convert it into unary, live. It should update live as new digits are added into the input box.
It should also have a visualization tool that shows the math behind the cantor pairing function:
a) How the numerator and denominator are converted into NxN
b) The pairing from NxN->N via the cantor pairing function

Unary should have 3 options of visualizaiton: a) As a series of 1s b) As a series of dots c) As tally marks.
Should be able to visualize high values in unary.

### Section 2. Unary to Base10 convertor
Given a unary input box (I should be able to click 1 1, 5 1s, 10 1s, and 100 1s). It should update live and show the live base 10 value of the number.
It should also have a visualization tool that shows the math behind the cantor pairing function:
a) How to get values (x, y) and how (x, y) are converted into numerator and denominator 

### 3. Cantor diagonalization function visualizer
Add an interactive, highly visual, intuitive "Cantor Pairing Visualizer: ℕ × ℕ → ℕ (The 2D Grid to 1D Line Trick)" section designed so a common person can instantly understand how a 2D pair (a, b) folds into a single unary line index N.
Show a 2x2 grid of values and show the diagonal walk, and corresponding values of the number in unary (expressed as number of 1s)
Ensure the visual aesthetic fits seamlessly with the current neal.fun clean playful look: rounded cards, crisp fonts, playful badges, interactive cursor states, and responsive layout. Fix any text overlap in headers or cards from the previous screen.
