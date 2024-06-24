const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  addToDisplay(0);
});

const one = document.querySelector("#one");
one.addEventListener("click", () => {
  addToDisplay(1);
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
  addToDisplay(2);
});

const thr = document.querySelector("#thr");
thr.addEventListener("click", () => {
  addToDisplay(3);
});

const fou = document.querySelector("#fou");
fou.addEventListener("click", () => {
  addToDisplay(4);
});

const fiv = document.querySelector("#fiv");
fiv.addEventListener("click", () => {
  addToDisplay(5);
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
  addToDisplay(6);
});

const sev = document.querySelector("#sev");
sev.addEventListener("click", () => {
  addToDisplay(7);
});

const eig = document.querySelector("#eig");
eig.addEventListener("click", () => {
  addToDisplay(8);
});

const nin = document.querySelector("#nin");
nin.addEventListener("click", () => {
  addToDisplay(9);
});

const add = document.querySelector("#add");
add.addEventListener("click", () => {
  addToDisplay(" + ");
});

const sub = document.querySelector("#sub");
sub.addEventListener("click", () => {
  addToDisplay(" - ");
});

const mult = document.querySelector("#mult");
mult.addEventListener("click", () => {
  addToDisplay(" x ");
});

const div = document.querySelector("#div");
div.addEventListener("click", () => {
  addToDisplay(" ÷ ");
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

function operate(op, first, sec){
    switch (op){
        case "a":
            return addFunct(first, sec);
        case "s":
            return subtract(first, sec);
        case "m":
            return multiply(first, sec);
        default:
            return divide(first, sec);
    }
}

const display = document.querySelector("#display");

function clr(){
    display.value = "";
}

function addToDisplay(char){
    display.value += char;
}

let first = 0;
let operator = "a";
let second = 0;

