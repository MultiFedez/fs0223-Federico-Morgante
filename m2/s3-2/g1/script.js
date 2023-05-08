// Esercizio 1

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

}

let user1 = new User("Federico", "Morgante", "34", "Manduria");
console.log(user1);

let user2 = new User("Massimo", "Dinoi", "43", "Firenze");
console.log(user2);

compareAge = function () {
    if (user1.age < user2.age) {
        return user1.firstName + " è più vecchio di " + user2.firstName
    }
    else {
        return user1.firstName + " è più giovane di " + user2.firstName
    }
}

console.log(compareAge());

// Esercizio 2

