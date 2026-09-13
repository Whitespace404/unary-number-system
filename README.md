<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />

# [Unary Number System]

## Basic Details
### Team Name: Toroid

### Team Members
- Team Lead: Rahul Thekkevilakom Reji - Sree Chitra Thirunal College of Engineering - Pappanamcode

### Project Description
A fully interactive, client-side educational playground dedicated to celebrating the world's least compact number system: **Unary**. While modern civilization relies on base-10, base-2, and occasionally hexadecimal to get things done without running out of paper, this project asks a simpler question: what happens if we throw all that positional efficiency straight out of the window and use only one single symbol—the number `1`—to represent every rational number known to humankind?

By pairing tally counting with Georg Cantor's 1878 pairing polynomial, this application maps fractions and integers into a two-dimensional lattice, threads them along a diagonal walk into a single natural number, and produces a wonderfully absurd string of ones. Complete with step-by-step LaTeX mathematical breakdowns, tactile token visualizers, and an interactive Cantor diagonal grid with animated traversal.

### The Problem (that doesn't exist)
For thousands of years, mathematicians have been obsessed with making numbers smaller. 

Ancient civilizations started with tallies, which was honest work. But then positional notation arrived. Hindu-Arabic numerals gave us zero and place values. Binary gave us computers. Hexadecimal made memory addresses tidy. Suddenly, numbers became compact, efficient, and frankly far too sensible. 

Take the number $42$. In decimal, it takes up two characters. In binary, six bits. Where is the drama in that? Where is the physical strain on your index finger? Positional systems have made arithmetic so brief that nobody stops to appreciate how much quantity is actually inside a quantity. Clearly, the problem with modern mathematics is that numbers simply do not take up enough space.

### The Solution (that nobody asked for)
The solution is **Unary**. 

Instead of ten digits, or two digits, we use exactly one: `1`. 
- To write one, you write `1`.
- To write three, you write `111`.
- To write fifty, you write fifty `1`s and question your life choices.

"Hold on," you might say. "Unary can only represent positive counting numbers! How on earth do you write negative numbers like $-\frac{1}{2}$ or fractions like $\frac{3}{4}$ with tally marks?"

The answer, as it turns out, is nineteenth-century German set theory:

1. **Fold the Numerator ($\mathbb{Z} \to \mathbb{N}_0$):** We take an integer numerator $p$ and interleave positive and negative numbers across the non-negative integers ($p > 0 \implies k_1 = 2p$, while $p < 0 \implies k_1 = -2p + 1$, and $0 \mapsto 0$).
2. **Shift the Denominator ($\mathbb{N} \to \mathbb{N}_0$):** Because division by zero is strictly forbidden, the denominator $q$ is always at least $1$. We subtract $1$ to map it onto non-negative coordinates ($k_2 = q - 1$).
3. **The Cantor Pairing Walk ($\mathbb{N}_0 \times \mathbb{N}_0 \to \mathbb{N}_0$):** We plug the coordinate pair $(k_1, k_2)$ into Cantor's pairing polynomial:
   $$\pi(k_1, k_2) = \frac{(k_1 + k_2)(k_1 + k_2 + 1)}{2} + k_2 = z$$
   This traverses the two-dimensional grid of fractions in diagonal zig-zags, assigning every single fraction a unique natural number index $z$.
4. **The Unary Output:** We print the symbol `1` exactly $z$ times.
5. **The Zero Catch:** What happens when a fraction results in a Base-10 value of $0$ (such as $\frac{0}{1}, \frac{0}{2}, \frac{0}{3}$)? In a unary tally system, zero requires zero marks—an empty tally $\varepsilon$. Because you cannot write down zero using only the symbol `1`, all numbers evaluating to Base-10 zero are politely greyed out in the visualizer as unrepresentable.

## Technical Details

### Technologies/Components Used
For Software:
- **Languages:**
  - **HTML5:** Semantic document structure, KaTeX math containers, and dynamic SVG overlays for diagonal path tracing.
  - **CSS3:** Neal.fun-inspired tactile design, chunky pressable 3D buttons, responsive layout grids, and diagonal striping for excluded values.
  - **JavaScript (Vanilla ES6+):** Pure client-side mathematical algorithms (`cantorPair`, `cantorUnpair`, `toUnary`), state controllers, and interactive canvas renderers.
- **Libraries:**
  - **KaTeX (v0.16.9):** High-speed, browser-side LaTeX formula typesetting for rational numbers, set definitions, and coordinate transformations.
- **Tools & APIs:**
  - **HTML5 Canvas API:** High-density virtualized dot-token renderer capable of smoothly displaying thousands of individual circle tallies without crashing the DOM.
  - **Node.js:** Test harnesses and numerical validation scripts.
  - **Git & GitHub:** Version control and source hosting.

### Key Architecture & Implementation
The application is organized into three interactive modules:

1. **Base-10 to Unary Converter:**
   - Accepts raw integers, fractions, or decimal inputs.
   - Calculates the exact Cantor index $z$ and displays real-time LaTeX algebraic breakdowns of both mapping steps (rational to lattice point, lattice point to triangular number).
   - Renders unary output in three selectable visual modes: raw character strings, token circles, and traditional five-bar tally marks (with canvas virtualisation for high values).

2. **Unary to Base-10 Converter:**
   - Provides a live unary tally buffer with tactile quick-add buttons ($+1$, $+5$, $+10$, $+100$, $+1,000$ ones).
   - Inverts Cantor's pairing function using quadratic triangular roots ($w = \lfloor\frac{\sqrt{8z+1}-1}{2}\rfloor$) to reconstruct $(k_1, k_2)$, then derives the original numerator, denominator, and floating-point decimal.

3. **Cantor Diagonalization Visualizer ($\mathbb{N}_0 \times \mathbb{N}_0 \to \mathbb{N}_0$):**
   - Renders an interactive 2D coordinate grid (resizable from $2 \times 2$ up to $5 \times 5$).
   - Draws a live vector SVG snake connecting lattice points in diagonal walk order.
   - Unfolds the 2D grid into a flattened 1D line tape beneath the grid.
   - Features animated walk playback with play/pause, single-step forward/backward, and click-to-inspect capabilities.
   - Greys out all cells that evaluate to a Base-10 value of $0$, with dedicated warning badges and tooltips explaining why they cannot exist in unary.

### Implementation
For Software:

# Installation
No package managers. No build tools. No four-hundred-megabyte dependencies folder:
```bash
git clone https://github.com/Whitespace404/unary-number-system.git
cd unary-number-system
```

# Run
Open `index.html` in any web browser:
```bash
# On Linux:
xdg-open index.html

# On macOS:
open index.html

# On Windows:
start index.html

# Or start a simple local Python server:
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

### Project Documentation
For Software:

# Screenshots
![Base-10 to Unary Converter](https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd)
*Base-10 to Unary Converter displaying fraction inputs, step-by-step KaTeX mathematical transformations, and live tally representations.*

![Unary to Base-10 Converter](https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd)
*Unary to Base-10 Converter showing tactile buttons, tally lengths, and inverted Cantor recovery.*

![Cantor Pairing Visualizer](https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd)
*The Cantor Diagonalization Visualizer showing the 2D grid, diagonal snake walk, 1D unfolded tape, and greyed-out unrepresentable zero values.*

# Diagrams
```
+-------------------------------------------------------------+
|               Rational Number: x = p / q                    |
+-------------------------------------------------------------+
                              |
                              v
        +---------------------------------------------+
        | Step 1: Lattice Mapping (p, q) -> (k1, k2)  |
        | - Numerator:   k1 = 2p (if >0) / -2p+1 (<0) |
        | - Denominator: k2 = q - 1 (q >= 1)          |
        +---------------------------------------------+
                              |
                              v
        +---------------------------------------------+
        | Step 2: Cantor Pairing Function             |
        | pi(k1, k2) = (k1 + k2)(k1 + k2 + 1)/2 + k2  |
        | Result: Unique Natural Number z in N_0      |
        +---------------------------------------------+
                              |
                              v
        +---------------------------------------------+
        | Step 3: Unary Encoding                      |
        | - If Base-10 value == 0: Greyed out (empty) |
        | - If Base-10 value != 0: Repeat '1' z times |
        +---------------------------------------------+
```
*Architecture flow: from rational number input through coordinate mapping and Cantor pairing to unary tally rendering.*

### Project Demo
# Video
[Add your demo video link here]
*Demonstration of live Base-10 to Unary conversion, Cantor unpairing, and the interactive diagonal walk animation.*

## Team Contributions
- Rahul Thekkevilakom Reji: Project design, mathematical implementation of Cantor pairing and unpairing algorithms, KaTeX integration, UI/UX implementation, and diagonalization visualizer.

---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)
