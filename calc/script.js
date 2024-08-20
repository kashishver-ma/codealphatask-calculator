let display = document.getElementById("display");
let currentNumber = "";
let previousNumber = "";
let operator = "";
let currentOperation = "";

// Function to clear the display and reset values
function clearDisplay() {
  display.innerText = "";
  currentNumber = "";
  previousNumber = "";
  operator = "";
  currentOperation = "";
}

// Function to append numbers to the current number input
function appendNumber(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

// Function to set the operation and update the display
function setOperation(op) {
  if (currentNumber === "" && op === "-") {
    // Allow negative number input
    currentNumber = "-";
    updateDisplay(currentNumber);
  } else if (currentNumber !== "") {
    if (previousNumber !== "") {
      calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = "";
    currentOperation = previousNumber + " " + operator;
    updateDisplay(currentOperation);
  }
}

// Function to perform the calculation based on the current operator
function calculate() {
  if (currentNumber === "" || previousNumber === "" || operator === "") return;
  let result;
  let prev = parseFloat(previousNumber);
  let curr = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }

  display.innerText = result;
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  currentOperation = "";
}

// Function to update the display
function updateDisplay(value) {
  display.innerText = value;
}
