// Create a function that takes an 2 arguments, an array of objects and a string character (eg. "a" or "b", etc.). The function should return all the objects in the array where the property name of that object contains the string character.

let array = [
    {
        name: "maria"
    },
    {
        name: "wael"
    },
    {
        name: "john"
    }
];

function character(array, searchChar) {

   
    let foundPerson=[];
    for (let i = 0; i < array.length; i++) {
        let currentPerson = array[i];
        for (let j = 0; j < currentPerson.name.length; j++) {
            if(searchChar == currentPerson.name[j]){
                foundPerson.push (currentPerson);
                break;
            }
        }
    } return foundPerson;

}

let results = character(array, "a");
console.log(results);

