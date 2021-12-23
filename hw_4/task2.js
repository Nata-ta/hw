// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// 		Проверить числа на корректность

var myNum = +prompt('Please, enter your number');
var myPower = +prompt('Please, enter power');

function numbers(val) {
    if (val < 0) {
        return -val;
    }
    else {
        return val;
    }
}

function calcPower(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert('One of your operands is not a number');
        return;
    }

    if (b == 0) {
        return 1;
    } else if (b == 1) {
        return a;
    }

    var r = 1;
    for (var i = 0; i < numbers(b); i++) {
        r = r * a;
    }

    if (b < 0) {
        return 1 / r;
    }

    return r;
}

alert(calcPower(myNum, myPower));