// 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
//        будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
//        Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//            • "director" — 3000;
//            • "manager" — 1500;
//            • "programmer" — 2000;
//            • для остальных значений — 1000.
//        После выполнения функции — вывести информацию о сотрудниках.

// sort(function(a, b) { return a > b });
// 1, 2, 3, 5, 10, 14
// 1, 10, 14, 2, 3,

var companyPers = [];

function test(array) {
    for (var i = 0; i < array.length + 1; i++) {
        var newEmployee = confirm("Do you want to add another employee?");
        if (newEmployee !== false) {
            var pers = {
                name: prompt("Please enter your name"),
                sName: prompt("Please enter your surname"),
                age: prompt("Please enter your age"),
                occupation: prompt("Please enter your occupation")
            }
            array.push(pers);
        }
    }
}

function getSalary(array) {
    for (var i = 0; i < array.length; i++) {
        switch (array[i].occupation) {
            case "director":
                array[i].salary = 3000;
                break;
            case "manager":
                array[i].salary = 1500;
                break;
            case "programmer":
                array[i].salary = 2000;
                break;
            default:
                array[i].salary = 1000;
                break;
        }
    }
}

test(companyPers);

getSalary(companyPers);

for (var i = 0; i < companyPers.length; i++) {
    console.log("Name: " + companyPers[i].name);
    console.log("Surname: " + companyPers[i].sName);
    console.log("Age: " + companyPers[i].age);
    console.log("Occupation: " + companyPers[i].occupation);
    console.log("Salary: " + companyPers[i].salary);
}