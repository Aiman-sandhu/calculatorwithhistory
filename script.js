const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

let history = [];

function appendToDisplay(input) {
  if (display.value === "Error") display.value = ""; // reset if error
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value;
    if (expression.trim() === "") return;

    let result = eval(expression);
    display.value = result;

    // Save in history
    history.push(`${expression} = ${result}`);
    updateHistory();
  } catch (error) {
    display.value = "Error";
  }
}

function updateHistory() {
  historyList.innerHTML = "";
  history.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;

    // click on history item → load back into display
    li.addEventListener("click", () => {
      display.value = item.split("=")[0].trim();
    });

    historyList.appendChild(li);
  });
}

function clearHistory() {
  history = [];
  updateHistory();
}
