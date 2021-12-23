// 4.	Напишите функцию, которая возвращает n-е число Фибоначчи.
// 		Число, которое должна вернуть функция вводит пользователь.
// 		Для решения используйте цикл.

// 		Пользователь ввел: 6
// 		Ряд Фибоначчи: 1, 1, 2, 3, 5, 8, 13, ...
// 		Функция должна вернуть: 8

var n = +prompt("Please, enter your number");
console.log(fibon(n));

function fibon(n) {
    var f = 0;
    var p = 1;
    var c;
    if (n <= 0) {
        return NaN;
    } else if (n == 1) {
        return f;
    } else if (n == 2) {
        return p;
    }
    for (var i = 0; i < n - 2; i++) {
        c = f + p;
        f = p;
        p = c;
    }
    return c;
}