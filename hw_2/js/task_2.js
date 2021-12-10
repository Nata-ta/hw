// 2. Построить прямоугольный треугольник состоящий из символа "*".
//     Запросить у пользователя число, к примеру - 4

//     *
//     **
//     ***
//     ****

var row = prompt('please, enter your number');

for (var i = 0; i < row; i++) {
    for (var j = 0; j <= i; j++) {
        document.write('*');
    }

    document.write('<br>');
}
