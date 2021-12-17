// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var a = +prompt('please, enter a');
var b = +prompt('please, enter b');
var c = +prompt('please, enter c');
var sum;

if (a === b) {
    alert('Ошибка');
} else if (a === c) {
    alert('Ошибка');
} else if (b === c) {
    alert('Ошибка');
} else {
    alert((a + b + c) / 3);
}