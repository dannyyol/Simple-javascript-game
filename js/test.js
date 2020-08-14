// var john = {
//     name: 'john',
//     yearOfBirth: 2020,
//     location: 'Nigeia'
// }

var Person = function(
    name, yearOfBirth, location) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.location = location;
    // this.calculateAge = function() {
    //     console.log(2019 - this.yearOfBirth)
    // }
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth)
}
Person.prototype.lastname = "Daniel Joe";
var john = new Person('Ayobami', 1990, 'USA');
var mark = new Person('Ayobami', 1969, 'Nigeria');
var jane = new Person('Ayobami', 1948, 'Ghana');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(mark.lastname);


var years = [1990, 1995, 1996, 1999]


function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function CalculateAge(el) {
    return 2016 - el;
}

var ages = arrayCalc(years, CalculateAge);

console.log(ages);