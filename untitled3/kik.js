let result = document.getElementById("result");
function appendValue(value) {
    if (result.value === "Error") {
        result.value = "";
    }
    result.value += value;
}
function clearResult() {
    result.value = "";
}
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9\.\+\-\*\/]/.test(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        result.value = result.value.slice(0, -1);
    } else if (key === "Escape") {
        clearResult();
    }
});
