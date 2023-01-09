const person = {
    firstName: 'John',
    lastname: 'Smith',
    age: 27,
    fullName: function () {
        return `${this.firstName} ${this.lastname}`
    }
}


console.log(typeof person)
console.log(person.firstName)
console.log(person.lastname)
console.log(person.age)
person.age = 25;
console.log(person.age)

console.log(person)
console.log(person.fullName())

const mary = new Person('Mary', 'Smith', 25);

console.log(mary)


console.log("================")

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    };
}