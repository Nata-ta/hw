// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// 		Функция должна вернуть "Even" или "Odd";

// 		function isEven(num) {
// 			// your code here
// 		}

var myNum = 60;

let isEven = (num) => (num % 2 == 0) ? "Even" : "Odd";

console.log(isEven(myNum));