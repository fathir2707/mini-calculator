const buttons = document.querySelectorAll('button');
const nums = document.querySelectorAll('.num');

const display = document.querySelector('.display');

const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.persen');

let prevNum = '';
let calcOp = '';
let currNum = '0';

const upDisplay = (num) => {
    display.value = num;
}

nums.forEach((num) => {
    num.addEventListener("click", (event) => {
        inputNum(event.target.value);
        upDisplay(currNum);
    })
})

const inputNum = (num) => {
    if (currNum === '0') {
        currNum = num;
    } else {
        currNum += num;
    }
}

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOp(event.target.value);
    })
})

const inputOp = (operator) => {
    if(calcOp === ''){
        prevNum = currNum;
    }

    calcOp = operator;
    currNum = '0';
}

equalSign.addEventListener('click', () => {
    calc();
    upDisplay(currNum);
})


const calc = () => {
    
    let result = '';

    switch(calcOp) {
        case "+":
            result = parseFloat(prevNum) + parseFloat(currNum);
            break;
        case "-":
            result = parseFloat(prevNum) - parseFloat(currNum);
            break;
        case "*":
            result = parseFloat(prevNum) * parseFloat(currNum);
            break;
        case "/":
            result = parseFloat(prevNum) / parseFloat(currNum);
            break;
        case (percen):
            result = parseFloat(prevNum) % parseFloat(currNum);
            break;
        default:
            return;
    }
    currNum = result;
    calcOp = '';
}

const clearAll = () => {
    prevNum = '';
    calcOp = '';
    currNum = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    upDisplay(currNum);
})

decimal.addEventListener('click', (event) => {
    inputDec(event.target.value);
    upDisplay(currNum);
})

inputDec = (dot) => {
    if(currNum.includes('.')) {
        return;
    }
    currNum += dot;
}

percentage.addEventListener('click', (event) => {
    inputPercen(event.target.value);
    upDisplay(currNum);
})

inputPercen = (cent) => {
    if (currNum.includes('%')) {
        return equalSign;
    }
    currNum += cent;
}






