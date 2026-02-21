# 🧮 Simple JavaScript Calculator

A modern, responsive calculator built using **HTML, CSS, and Vanilla JavaScript**.

This project demonstrates DOM manipulation, state management, keyboard support, and real-time expression rendering without using `eval()`.

---

## ✨ Features

### 🔢 Basic Operations
- Addition (+)
- Subtraction (−)
- Multiplication (×)
- Division (÷)
- Percentage (%)

---

### ➕ Live Expression Display
- Expressions appear in real-time.
- Example:

  5 * 9

- Result replaces the expression after pressing `=`.

---

### 🔄 Toggle Sign (±)
- Convert any number to negative or positive.
- Works for:
  - First number
  - Second number
  - After selecting an operator

Example:

  5 → * → ± → 9  
  Display: 5 * -9  
  Result: -45  

Also works:

  -5 * -9 = 45

---

### ⌨ Keyboard Support

| Key | Action |
|------|--------|
| 0–9 | Numbers |
| + - * / | Operators |
| . | Decimal |
| Enter / = | Calculate |
| Backspace | Delete last digit |
| Escape | Clear |

---

### 🎯 Smart Input Handling
- Prevents multiple decimals
- Prevents division by zero
- Auto-clears when starting new calculation after `=`
- Dynamic font resizing for long expressions
- Prevents overflow issues

---

## 🛠 Technical Highlights

- No `eval()` used (safe computation logic)
- Manual state management using:
  - `current`
  - `prev`
  - `operator`
  - `freshInput`
  - `justCalc`
- Proper negative number handling
- Clean separation of logic and UI
- Works without modifying HTML structure

---

## 📁 Project Structure

calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## 🚀 How to Run

1. Download or clone the project
2. Open `index.html` in your browser
3. Start calculating

No dependencies required.

---

## 📌 Possible Future Improvements

- Operator precedence (e.g., `5 + 3 × 2`)
- Continuous multi-step expressions
- Scientific mode
- History panel
- Memory functions (M+, M-, MR, MC)
- An option of chaning the theme

---

## 👨‍💻 Author

Built as a front-end logic and DOM manipulation exercise.