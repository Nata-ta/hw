// 4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия.Каждый элемент масива — объект,
//     содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
//        Реализовать заполнение массива пользователем.По окончанию заполнения — вывести информацию о сотрудниках.

var companyPers = [];

function test(companyPers) {
    for (var i = 0; i < companyPers.length + 1; i++) {
        var newEmployee = confirm("Do you want to add another employee?");
        if (newEmployee !== false) {
            var pers = {
                name: prompt("Please enter your name"),
                sName: prompt("Please enter your surname"),
                age: prompt("Please enter your age"),
                occupation: prompt("Please enter your occupation"),
                show: function () {
                    console.log("Name: " + this.name);
                    console.log("Surname: " + this.sName);
                    console.log("Age: " + this.age);
                    console.log("Occupation: " + this.occupation);
                }
            }
            companyPers.push(pers);
        } else if (newEmployee == false) {
            for (var i = 0; i < companyPers.length; i++) {
                companyPers[i].show();
            }
        }
    }
}

test(companyPers);