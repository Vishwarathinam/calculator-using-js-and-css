function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    document.getElementById("result").value += char;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}
