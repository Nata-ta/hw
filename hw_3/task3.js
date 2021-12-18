// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', 
// а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.

//     Для массива размером 3
//     ['odd', 'odd', 'odd']       // 1й элемент
//     ['even', 'even', 'even']    // 2й элемент
//     ['odd', 'odd', 'odd']       // 3й элемент

//     let arr = [
//         ['odd', 'odd', 'odd'],
//         ['even', 'even', 'even'],
//         ['odd', 'odd', 'odd']
//     ]

var arr = [];
var odd = ['odd', 'odd', 'odd'];
var even = ['even', 'even', 'even'];

arr.length = +prompt('Please, enter Array length');

for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        arr[i] = even;
    } else {
        arr[i] = odd;
    }
}

console.log(arr);