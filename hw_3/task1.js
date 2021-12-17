// 1. Сделать собственные примеры методов применяемых для массивов.

var myArray = [];
myArray.push("apple", "banana", "melon", "pear", "orange");
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift("grapes");
console.log(myArray);

myArray.shift();
console.log(myArray);

var changedArray = myArray.join(", ");
console.log('After join:');
console.log(changedArray);

var newArray = changedArray.split(", ");
console.log('After split:');
console.log(newArray);

var vege = ["potato", "tomato", "cabbage"];
var food = newArray.concat(vege);
console.log(food);

console.log('Food before reverse: ' + food);
food = food.reverse();
console.log('Food after reverse: ' + food);

var piece = food.slice(2, 4);
console.log('Array after slice(2,4): ' + piece);

var del = food.splice(1, 3);
console.log('Deleted: ' + del);
console.log('Left: ' + food);

food.splice(1, 0, "cucumber", "broccoli", "pineapple");
console.log('After incut: ' + food);

console.log(food.sort());
