const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  addToDisplay(0, false);
});

const one = document.querySelector("#one");
one.addEventListener("click", () => {
  addToDisplay(1, false);
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
  addToDisplay(2, false);
});

const thr = document.querySelector("#thr");
thr.addEventListener("click", () => {
  addToDisplay(3, false);
});

const fou = document.querySelector("#fou");
fou.addEventListener("click", () => {
  addToDisplay(4, false);
});

const fiv = document.querySelector("#fiv");
fiv.addEventListener("click", () => {
  addToDisplay(5, false);
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
  addToDisplay(6, false);
});

const sev = document.querySelector("#sev");
sev.addEventListener("click", () => {
  addToDisplay(7, false);
});

const eig = document.querySelector("#eig");
eig.addEventListener("click", () => {
  addToDisplay(8, false);
});

const nin = document.querySelector("#nin");
nin.addEventListener("click", () => {
  addToDisplay(9, false);
});

const add = document.querySelector("#add");
add.addEventListener("click", () => {
  addToDisplay(" + ", true);
});

const sub = document.querySelector("#sub");
sub.addEventListener("click", () => {
  addToDisplay(" - ", true);
});

const mult = document.querySelector("#mult");
mult.addEventListener("click", () => {
  addToDisplay(" x ", true);
});

const div = document.querySelector("#div");
div.addEventListener("click", () => {
  addToDisplay(" ÷ ", true);
});

const eq = document.querySelector("#eq");
eq.addEventListener("click", () => {
  evaluate();
});

function addFunct(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(firstS, op, secS){
    first = Number(firstS);
    sec = Number(secS);

    switch (op){
        case "+":
            return addFunct(first, sec);
        case "-":
            return subtract(first, sec);
        case "x":
            return multiply(first, sec);
        default:
            return divide(first, sec);
    }
}

const display = document.querySelector("#display");

function clr(){
    display.value = "";
}

function addToDisplay(char, isOperator){
    if(display.value.includes("+") || display.value.includes("-") 
        || display.value.includes("÷") || display.value.includes("x")){
            if(isOperator){
                return;
            }
    }
    display.value += char;
}

function evaluate(){
    arr = display.value.split(" ");
    result = operate(arr[0], arr[1], arr[2]);
    display.value = result;
}

