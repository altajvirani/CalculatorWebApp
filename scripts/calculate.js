// let dec = false;
// const exp = document.getElementById('exp');
// const res = document.getElementById('res');
// const buttonList = document.querySelectorAll("button");
// const isNumber = value => /^[0-9]$/.test(value);
// const isOperator = value => /^[+\-*/%]$/.test(value);
// const isSymbol = value => /^[.=]$/.test(value);
// const handleCancel = () => {
//     exp.textContent = "";
//     res.textContent = 0;
//     dec = false;
// }

// const handleBackspace = (resLen) => {
//     if (res.textContent == "0") {
//         exp.textContent = "";
//         dec = false;
//     } else {
//         if (res.textContent.endsWith("."))
//             dec = false;
//         res.textContent = (resLen == 1) ? 0 : res.textContent.slice(0, -1);
//     }
// }

// const handleDecimal = (reslastChar) => {
//     if (!dec) {
//         if (isOperator(reslastChar))
//             res.textContent += "0";
//         res.textContent += ".";
//         dec = true;
//     }
// }

// const handleEquals = () => {
//     exp.textContent = (res.textContent == 0) ? "" : res.textContent;
//     res.textContent = eval(res.textContent);
//     dec = (res.textContent.includes(".")) ? true : false;
// }

// const handleValue = (value, reslastChar) => {
//     if (isOperator(value)) {
//         if (isOperator(reslastChar))
//             res.textContent = res.textContent.slice(0, -1)
//         res.textContent += value;
//         dec = false;
//     } else if (res.textContent == "0")
//         res.textContent = value;
//     else
//         res.textContent += value;
// }

// const handleInput = e => {
//     let value;
//     if (e.key)
//         value = e.key;
//     else if (e.currentTarget)
//         value = e.currentTarget.value;
//     let resLen = res.textContent.length;
//     let expLen = exp.textContent.length;
//     let reslastChar = res.textContent.slice(-1);
//     switch (value) {
//         case "C":
//             handleCancel();
//             break;
//         case "Backspace":
//             handleBackspace(resLen);
//             break;
//         case ".":
//             handleDecimal(reslastChar);
//             break;
//         case "=":
//         case "Enter":
//             handleEquals();
//             break;
//         default:
//             if (isOperator(value) || isNumber(value) || isSymbol(value))
//                 handleValue(value, reslastChar);
//     }
// }
// buttonList.forEach(btn => btn.addEventListener("click", handleInput));
// document.addEventListener("keydown", handleInput);

let dec = false;
const exp = document.getElementById('exp');
const res = document.getElementById('res');
const buttonList = document.querySelectorAll("button");
const isNumber = value => /^[0-9]$/.test(value);
const isOperator = value => /^[+\-*/%]$/.test(value);
const isSymbol = value => /^[.=]$/.test(value);
const handleCancel = () => {
    exp.textContent = "";
    res.textContent = 0;
    dec = false;
}

const handleBackspace = (resLen) => {
    if (res.textContent == "0") {
        exp.textContent = "";
        dec = false;
    } else {
        if (res.textContent.endsWith("."))
            dec = false;
        res.textContent = (resLen == 1) ? 0 : res.textContent.slice(0, -1);
    }
}

const handleDecimal = (reslastChar) => {
    if (!dec) {
        if (isOperator(reslastChar))
            res.textContent += "0";
        res.textContent += ".";
        dec = true;
    }
}

const handleEquals = () => {
    exp.textContent = (res.textContent == 0) ? "" : res.textContent;
    res.textContent = eval(res.textContent);
    dec = (res.textContent.includes(".")) ? true : false;
}

const handleValue = (value, reslastChar) => {
    if (isOperator(value)) {
        if (isOperator(reslastChar))
            res.textContent = res.textContent.slice(0, -1)
        res.textContent += value;
        dec = false;
    } else if (res.textContent == "0")
        res.textContent = value;
    else
        res.textContent += value;
}

const handleInput = e => {
    let value;
    if (e.key)
        value = e.key;
    else if (e.currentTarget)
        value = e.currentTarget.value;
    let resLen = res.textContent.length;
    let expLen = exp.textContent.length;
    let reslastChar = res.textContent.slice(-1);
    switch (value) {
        case "C":
            handleCancel();
            break;
        case "Backspace":
            handleBackspace(resLen);
            break;
        case ".":
            handleDecimal(reslastChar);
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