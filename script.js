let current = '0';
let prev = null;
let operator = null;
let freshInput = false;
let justCalc = false;

const display =
    document.getElementById('display') ||
    document.getElementById(' display');

const expression = document.getElementById('expression');

function render() {
    if (!display) return;

    let output = '';

    if (prev !== null && operator !== null) {
        output = prev + ' ' + operator + (freshInput ? '' : ' ' + current);
    } else {
        output = current;
    }

    display.textContent = output;

    display.classList.remove('small', 'xsmall', 'error');

    if (output.length > 18) display.classList.add('xsmall');
    else if (output.length > 14) display.classList.add('small');

    if (expression) expression.textContent = '';
}

function appendValue(d) {
    if (justCalc) {
        current = d;
        prev = null;
        operator = null;
        justCalc = false;
    } else if (freshInput) {
        current = d;
        freshInput = false;
    } else {
        current = current === '0' ? d : current + d;
    }

    render();
}

function appendDot() {
    if (justCalc) {
        current = '0.';
        prev = null;
        operator = null;
        justCalc = false;
    } else if (freshInput) {
        current = '0.';
        freshInput = false;
    } else if (!current.includes('.')) {
        current += '.';
    }

    render();
}

function appendOperator(op) {
    if (prev === null) {
        prev = current;
    } else if (!freshInput) {
        prev = compute(parseFloat(prev), parseFloat(current), operator).toString();
        current = prev;
    }

    operator = op;
    freshInput = true;
    justCalc = false;

    render();
}

function calculate() {
    if (prev === null || operator === null) return;

    const result = compute(parseFloat(prev), parseFloat(current), operator);

    if (result === null) {
        display.classList.add('error');
        display.textContent = "Can't divide by 0";
        current = '0';
        prev = null;
        operator = null;
        justCalc = true;
        return;
    }

    current = parseFloat(result.toFixed(10)).toString();
    prev = null;
    operator = null;
    justCalc = true;
    freshInput = false;

    render();
}

function compute(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return b === 0 ? null : a / b;
}

function clearDisplay() {
    current = '0';
    prev = null;
    operator = null;
    freshInput = false;
    justCalc = false;
    render();
}

function deleteLast() {
    if (freshInput) return;

    if (current.length > 1) {
        current = current.slice(0, -1);
    } else {
        current = '0';
    }

    render();
}

/* ✅ FIXED toggle to support negative second numbers */
function toggle() {
    if (freshInput) {
        current = '-';
        freshInput = false;
    } else if (current === '-') {
        current = '0';
    } else if (current.startsWith('-')) {
        current = current.slice(1);
    } else if (current !== '0') {
        current = '-' + current;
    }

    render();
}

function percentage() {
    current = (parseFloat(current) / 100).toString();
    render();
}

document.addEventListener('keydown', e => {
    if (e.key >= '0' && e.key <= '9') appendValue(e.key);
    else if (e.key === '.') appendDot();
    else if (e.key === '+') appendOperator('+');
    else if (e.key === '-') appendOperator('-');
    else if (e.key === '*') appendOperator('*');
    else if (e.key === '/') {
        e.preventDefault();
        appendOperator('/');
    }
    else if (e.key === 'Enter' || e.key === '=') calculate();
    else if (e.key === 'Backspace') deleteLast();
    else if (e.key === 'Escape') clearDisplay();
});

render();