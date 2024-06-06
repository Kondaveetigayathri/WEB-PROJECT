let result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += ` ${operator} `;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    try {
        result.value = eval(result.value.replace(/[^-()\d/*+.]/g, ''));
    } catch (e) {
        result.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key >= 0 && event.key <= 9) {
        appendNumber(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        appendOperator(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        result.value = result.value.slice(0, -1);
    } else if (event.key === 'Escape') {
        clearResult();
    }
});

