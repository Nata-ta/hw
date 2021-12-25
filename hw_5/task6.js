// 6. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
//        Параметр для сортировки принимается от пользователя.
//        После выполнения функции — вывести информацию о сотрудниках.

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

var crit = prompt("Enter criteria (name, sName, age, salary): ");
companyPers.sort(function (a, b) {
    switch (crit) {
        case "name":
            if (a["name"] > b["name"]) {
                return 1;
            }
            else if (a["name"] < b["name"]) {
                return -1;
            } else { return 0; }
            break;
        case "sName":
            if (a["sName"] > b["sName"]) {
                return 1;
            }
            else if (a["sName"] < b["sName"]) {
                return -1;
            } else { return 0; }
            break;
        case "age":
            return a["age"] - b["age"];
            break;
        case "salary":
            return a["salary"] - b["salary"];
            break;
        default:
            alert("None");
    }
})

console.log("Now the list of employees is: " + companyPers);