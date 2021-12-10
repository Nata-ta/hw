// 4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран.

var personName = prompt('your name');
var surName = prompt('your surname');
var age = +prompt('your age');

age += 10;

var result = "Пользователь с именем " + personName + " и фамилией " + surName + " и его возраст через 10 лет будет " + age;

console.log(result);