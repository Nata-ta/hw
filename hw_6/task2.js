// 2. Допишите функцию countOnline

let users = [
    {
        age: 27,
        online: false
    },
    {
        age: 32,
        online: true
    },
    {
        age: 48,
        online: false
    },
    {
        age: 19,
        online: true
    }
];

function countOnline(arr) {
    var persOnline = arr.filter(item => item.online === true);
    return `Количество людей онлайн: ${persOnline.length}`;
}
console.log(countOnline(users));
