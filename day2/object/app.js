//object

// let person={
//     name : 'pranav',
//     age : 21,
//     color : 'ttttt'
// }

// console.log(person);
// console.log(person.name);
// console.log(person.age);

// person.name ='Pranav Kesarkar';
// console.log(person);

// // adding new property

// person.gender='male';
// console.log(person);

// //delete property

// delete person.color;
// console.log(person);


// advance object

let person={
    name : 'pranav',
    age : 21,
    color : 'ttttt',
    fun: function name(params) {
        return(`MY NAME IS ${this.name} and my age is ${this.age}`);
    },
    newObj:{
        gender : 21,
        address : "YARNAL",

    }
}
// console.log(person.fun());

console.log(person.newObj.address);

