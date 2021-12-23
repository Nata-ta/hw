// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.

var a = +prompt('Please, enter your first number');
var b = +prompt('Please, enter your second number');
var sign = prompt('Please, enter your sign');

var calcNums = calculate(a, b, sign);
if (calcNums !== undefined) {
    alert('Your answer is ' + calcNums);
}

function calculate(a, b, sign) {
    var result;
    if (isNaN(a) || isNaN(b)) {
        alert('One of the operands is not a number');
        return;
    }
    switch (sign) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            alert('Unsupported sign');
            return;
    }

    return result;
}

