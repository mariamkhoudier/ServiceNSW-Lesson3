let me = {
    name: "Mariam",
    age: 30,
}; //Q1 

console.log(me.age);
me.age++;
console.log(me.age);

me.hobbies = [
    "Reading", "Swimming", "writting"
]; //Q3

me.pets = [
    {
        name: "lolly",
        age: 3,
        species: "cat",
        
        
    },{
        name: "ho",
        age: 4,
        species: "dog",
        
    },{

        name: "loy",
        age: 3,
        species: "monkey",
        
    } //Q4
]

let message = "" ;
for (let i = 0; i < me.hobbies.length; i++) {
    const hobby = me.hobbies[i];
    //console.log(hobby);
    if(i == me.hobbies.length -1){
        message += "and " +hobby + ".";
    }else {
        message += hobby+ ", ";
    }
}
console.log("My Hoppies are "+ message);