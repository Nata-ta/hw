// 5.  Создать игру "Камень-Ножницы-Бумага".
// Выбор компьютера определяется строкой:  

// var computerChoice = Math.random();
// alert(computerChoice);

// let comp = getComputerChoice();
// let user = getUserChoice();
// function game(comp, user) {

// }

// Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново

let comp = getComputerChoice();
let user = prompt('Please chose rock, scissors or paper');
game(comp, user);

function getComputerChoice() {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var compChoice = getRandomInt(0, 3);

    switch (compChoice) {
        case 0:
            return "rock!";
            break;
        case 1:
            return "scissors!";
            break;
        case 2:
            return "paper!";
            break;
        default:
            return "Something wrong!";
    }
}

function game(comp, user) {

    if (user == "paper" && comp == "paper!" || user == "rock" && comp == "rock!" || user == "scissors" && comp == "scissors!") {
        alert('Draw!');
    } else if (user == "paper" && comp == "rock!" || user == "rock" && comp == "scissors!" || user == "scissors" && comp == "paper!") {
        alert('You won!');
    } else if (user == "paper" && comp == "scissors!" || user == "rock" && comp == "paper!" || user == "scissors" && comp == "rock!") {
        alert('You lost!');
    }

    return alert('Your choice is ' + user + ' and computer choice is ' + comp);
}
