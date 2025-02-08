document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('.calculator-screen');
    const buttons = document.querySelectorAll('.button');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');
    
    let currentInput = '';
    let operator = '';
    let previousInput = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            
            if (button.classList.contains('operator')) {
                if (currentInput === '') return;
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                screen.value = currentInput;
            }
        });
    });
    
    clearButton.addEventListener('click', () => {
        currentInput = '';
        operator = '';
        previousInput = '';
        screen.value = '';
    });
    
    equalsButton.addEventListener('click', () => {
        if (currentInput === '' || previousInput === '' || operator === '') return;
        
        const previous = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        let result;
        
        switch (operator) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '*':
                result = previous * current;
                break;
            case '/':
                result = previous / current;
                break;
            default:
                return;
        }
        
        screen.value = result;
        currentInput = result.toString();
        previousInput = '';
        operator = '';
    });
});
