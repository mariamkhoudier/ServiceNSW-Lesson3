// 1- Create a function that takes 2 arguments that are numbers and returns the sum of those numbers.
function myNumbers(num1, num2) {
    return (num1 + num2)

};
let myNumberssum = myNumbers(1, 2);
let myNumberssum2 = myNumbers(110, 20);
console.log("Sum is" + myNumberssum);
console.log("Sum is" + myNumberssum2);

// 2- Create a function that takes 2 arguments that are numbers and returns the largest of those numbers.
function getLargestnumber(num1, num2) {
    if (num1 > num2) {
        return num1;

    } else {
        return num2
    }

}
let numbers = getLargestnumber(1, 9);
console.log("The largest number is " + numbers);


// 3- Create a function that takes 1 argument that is an array and prints each of the elements in that array to the console.
function names(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let arr = ["mariam", "wael"];
names(arr);
names(["mariam", "wael"])




// 4- Create a function that takes 2 arguments, name and age, and returns an object with properties name and age set to the values passed in.
function person(argName, argAge) {
    let obj = {
        name: argName,
        age: argAge

    }
    return obj;
}

let value = person("mariam", 29);
console.log("your name: " + value.name);
console.log("your age: " + value.age);

// 5-Create a function that takes 1 argument that is an array of objects representing people. Each object should have a property name which should be a string and a property age which should be a number. The function should return the name of the oldest person.
function theoldestperson(array) {
    let oldest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (oldest.age < array[i].age){

            oldest=array[i];
        }
    }
    return oldest.name;
}

let people = [
    {
        name: "mariam",
        age: 29
    },

    {
        name: "john",
        age: 35
    },
    {
        name: "maria",
        age: 35
    }
]

let myfunction = theoldestperson(people);
console.log(myfunction);