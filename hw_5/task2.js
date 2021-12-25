// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
//        Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
//        В зависимости от принятого знака операции, вызвать соответствующий метод.

var Calculator = {
    sum: function (a, b) {
        var sumFun = a + b;
        alert("Your anwer is " + sumFun);
    },
    subst: function (a, b) {
        var substFun = a - b;
        alert("Your anwer is " + substFun);
    },
    multi: function (a, b) {
        var multiFun = a * b;
        alert("Your anwer is " + multiFun);
    },
    divi: function (a, b) {
        var diviFun = a / b;
        alert("Your anwer is " + diviFun);
    }
}

var a = +prompt("Please, enter the first number");
var b = +prompt("Please, enter the second number");
var sign = prompt("Please, enter the sign");

if (sign == "+") {
    Calculator.sum(a, b);
} else if (sign == "-") {
    Calculator.subst(a, b);
} else if (sign == "*") {
    Calculator.multi(a, b);
} else if (sign == "/") {
    Calculator.divi(a, b);
} else {
    alert("One of your enters is not correct");
}