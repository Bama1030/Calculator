function calculate() {

    var inputField = document.getElementById('expression');
    var expression = inputField.value;
    try {
        var result = eval(expression);
        inputField.value = expression;
        document.getElementById('res').innerHTML = result;
    } catch (error) {
        inputField.value = "Error: Invalid expression";
    }
}

document.getElementById('expression').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        calculate();
    }
});

function buttonClick(value) {
    document.getElementById('expression').value += value;
}

function clearInput() {
    document.getElementById('res').innerHTML = "";
    document.getElementById('expression').value = '';
    document.getElementById('result').value = '';

}

function squareRoot() {
    var expression = document.getElementById('expression').value;
    var result = Math.sqrt(eval(expression));
    document.getElementById('expression').value = expression;
    document.getElementById('res').innerHTML = result;
}

function plusMinus() {
    var expression = document.getElementById('expression').value;
    var result = eval(expression) * -1;
    document.getElementById('expression').value = expression;
    document.getElementById('res').innerHTML = result;
}

function deleteLastCharacter() {
    var expression = document.getElementById('expression').value;
    document.getElementById('expression').value = expression.slice(0, -1);
}