let dec = false;
const exp = document.getElementById('exp');
const res = document.getElementById('res');
const buttonList = document.querySelectorAll("button");
const isNumber = value => /^[0-9]$/.test(value);
const isOperator = value => /^[+\-*/%]$/.test(value);
const isSymbol = value => /^[.=]$/.test(value);
const handleCancel = () => {
    exp.textContent = "";
    res.value = 0;
    dec = false;
}

const handleBackspace = (resLen) => {
    if (res.value === "0") {
        exp.textContent = "";
        dec = false;
    } else {
        dec = (res.value.endsWith(".")) ? false : dec;
        res.value = (resLen === 1 || ['NaN', 'undefined', 'Infinity'].includes(res.value)) ? 0 : res.value.slice(0, -1);
    }
}

const handleDecimal = (resLen, reslastChar) => {
    for (let i = resLen - 1; i >= 0 && !isOperator(res.value.charAt(i)); i--)
        dec = (res.value.charAt(i) === ".") ? true : dec;
    if (!dec) {
        res.value = (isOperator(reslastChar)) ? res.value + "0" : res.value;
        res.value += ".";
        dec = true;
    }
}

const handleExpression = e => Function(`'use strict'; return (${e})`)();

const handleEquals = () => {
    exp.textContent = (res.value == 0) ? "" : res.value;
    res.value = handleExpression(res.value);
    dec = (res.value.includes(".")) ? true : false;
}

const handleNumber = (value) => res.value = (res.value === "0") ? value : res.value + value;

const handleValue = (value, reslastChar) => {
    if (isOperator(value)) {
        if (reslastChar !== ".") {
            res.value = (isOperator(reslastChar)) ? res.value.slice(0, -1) : res.value;
            res.value += value;
            dec = false;
        }
    } else
        handleNumber(value);
}

const handleInput = e => {
    e.preventDefault();
    let value = e.key || e.currentTarget.value;
    let resLen = res.value.length;
    let reslastChar = res.value.slice(-1);
    switch (value) {
        case "C":
            handleCancel();
            break;
        case "Backspace":
            handleBackspace(resLen);
            break;
        case ".":
            handleDecimal(resLen, reslastChar);
            break;
        case "=":
        case "Enter":
            handleEquals();
            break;
        default:
            if (isOperator(value) || isNumber(value) || isSymbol(value))
                handleValue(value, reslastChar);
    }
}
buttonList.forEach(btn => btn.addEventListener("click", handleInput));
document.addEventListener("keydown", handleInput);