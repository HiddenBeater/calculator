const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}


function calculate(){
    let result = display.value;
    if (result.includes('+')) {
        // Split the result into two operands at the '+'
        let operands = result.split('+');
        let operand1 = parseFloat(operands[0]);
        let operand2 = parseFloat(operands[1]);

        // Check if both operands are valid numbers
        if (!isNaN(operand1) && !isNaN(operand2)) {
            let sum = operand1 + operand2;
            display.value = sum;  // Output the sum to the display
        } else {
            display.value = 'Error';  // If operands are not valid numbers
        }
    }
    else if (result.includes('-')){
        if (result.includes('-')) {
            // Split the result into two operands at the '+'
            let operands = result.split('-');
            let operand1 = parseFloat(operands[0]);
            let operand2 = parseFloat(operands[1]);
    
            // Check if both operands are valid numbers
            if (!isNaN(operand1) && !isNaN(operand2)) {
                let difference = operand1 - operand2;
                display.value = difference;  // Output the difference to the display
            } else {
                display.value = 'Error';  // If operands are not valid numbers
            }
        }
    }
    else if (result.includes('*')){
        if (result.includes('*')) {
            // Split the result into two operands at the '+'
            let operands = result.split('*');
            let operand1 = parseFloat(operands[0]);
            let operand2 = parseFloat(operands[1]);
    
            // Check if both operands are valid numbers
            if (!isNaN(operand1) && !isNaN(operand2)) {
                let product = operand1 * operand2;
                display.value = product;  // Output the product to the display
            } else {
                display.value = 'Error';  // If operands are not valid numbers
            }
        }
    }
    else if (result.includes('/')){
        if (result.includes('/')) {
            // Split the result into two operands at the '+'
            let operands = result.split('/');
            let operand1 = parseFloat(operands[0]);
            let operand2 = parseFloat(operands[1]);
    
            // Check if both operands are valid numbers
            if (!isNaN(operand1) && !isNaN(operand2)) {
                let quotient = operand1 / operand2;
                display.value = quotient;  // Output the quotient to the display
            } else {
                display.value = 'Error';  // If operands are not valid numbers
            }
        }
    }
    
}
    