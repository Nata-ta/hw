// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var a = +prompt('please, enter number a');
var b = +prompt('please, enter number b');
var c = +prompt('please, enter number c');


if (a >= b && a >= c) {
    document.write(a);
} else if (b >= a && b >= c) {
    document.write(b);
} else {
    document.write(c);
}