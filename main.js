/**
 * Calculator logic
 */
class Calculator {

    constructor() {
        this.clear();
    }

    /**
     * initializes default values
     */
    clear() {
        this.displayNum = "";
        this.operator = "";
        this.secondNum = "";
        this.result = 0;
        this.showDisplay();
    }

    /**
     * udates display in html
     */
    showDisplay() {
        document.querySelector(".display").innerText = this.displayNum;
    }

    /**
     * adds a keypress to the number displayed or the one to be operated with
     */
    addNum(number) {
        // determines if number needs to be shown or just kept track of
        if (this.operator !== "") { 
            this.addSecondNum(number);
            return;
        }
        // only allows one decimal
        if (number === "." && this.displayNum.includes(".")) { return };
        this.displayNum += number;
        this.showDisplay();
    }

    // adding to the number used in calculate but not displayec
    addSecondNum(number) {
        if (number === "." && this.displayNum.includes(".")) { return };
        this.secondNum += number;
        document.querySelector(".display").innerText = this.secondNum;
    }

    // picking a operation to use
    chooseOperator(operator) {
        this.operator = operator;
    }

    // deleting from the number
    delete() {
        this.displayNum = this.displayNum.slice(0, -1);
        this.showDisplay();
    }

    /**
     * Resetting values after a calculation
     */
    finishOperation(result) {
        this.operator = "";
        this.secondNum = "";
        this.displayNum = result;
    }

    /**
     * determining which operation to use in the calculation
     */
    calculate() {
        switch (this.operator) {
            case "+":
                this.result = Number(this.displayNum) + Number(this.secondNum);
                this.displayNum = this.result.toString();
                this.showDisplay();
                this.finishOperation(this.result.toString());
                break;
            case "-":
                this.result = Number(this.displayNum) - Number(this.secondNum);
                this.displayNum = this.result.toString();
                this.showDisplay();
                this.finishOperation(this.result.toString());
                break;
            case "x":
                this.result = Number(this.displayNum) * Number(this.secondNum);
                this.displayNum = this.result.toString();
                this.showDisplay();
                this.finishOperation(this.result.toString());
                break;
            case "/":
                this.result = Number(this.displayNum) / Number(this.secondNum);
                this.displayNum = this.result.toString();
                this.showDisplay();
                this.finishOperation(this.result.toString());
                break;
            default:
                break;
        }
    }
}

// DOM elements
const numButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const allClear = document.getElementById("all-clear");
const del = document.getElementById("del-button");
const equals = document.getElementById("equals");

let calc = new Calculator();

// number functionality
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.addNum(button.innerText);
    });
});

// operation functionality
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperator(button.innerText);
    });
});

// clear functionality
allClear.addEventListener('click', () => { calc.clear() });

// delete functionality
del.addEventListener('click', () => { calc.delete() });

// equals functionality
equals.addEventListener('click', () => { calc.calculate() });
