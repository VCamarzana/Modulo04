
var num1 = () => parseInt(document.getElementById("input-number1").value);
var num2 = () => parseInt(document.getElementById("input-number2").value);

var getAdd = () => {
    result = num1() + num2();
    return document.getElementById("equal").innerHTML = ("Resultado: " + result);
}
var getSubstract = () => {
    result = num1() - num2();
    return document.getElementById("equal").innerHTML = ("Resultado: " + result);
}
var getMultiply = () => {
    result = num1() * num2();
    return document.getElementById("equal").innerHTML = ("Resultado: " + result);
}
var getDivision = () => {
    result = num1() / num2();
    return document.getElementById("equal").innerHTML = ("Resultado: " + result);
}

function getError() {
    if (!num1() || !num2()) {
        return document.getElementById("equal").innerText = "Introduzca un número en cada casilla.";
    }
}

document.getElementById("button-add").addEventListener("click", getAdd);
document.getElementById("button-substract").addEventListener("click", getSubstract);
document.getElementById("button-multiply").addEventListener("click", getMultiply);
document.getElementById("button-divide").addEventListener("click", getDivision);

document.getElementById("button-add").addEventListener("click", getError);
document.getElementById("button-substract").addEventListener("click", getError);
document.getElementById("button-multiply").addEventListener("click", getError);
document.getElementById("button-divide").addEventListener("click", getError);