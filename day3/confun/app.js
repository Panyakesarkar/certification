
// function Details(){
//     this.name="Pranav";
//     this.age=21;
//     this.addre="Yarnal";
// }

// let user= new Details();
// console.log(user.name);


// custom fun

function Details(nam,age,place){
    this.name=nam;
    this.age=age ;
    this.addr=place;
    this.description = function(){
        return(`my name is ${this.name},my age is ${this.age}`);
    }
}

let user1= new Details("Pranav",21,"Yarnal");
let user2= new Details("Suhas",20,"Jatrat");
let user3= new Details("Devaki",20,"Kognoli");
let user4= new Details("Shruti",20,"Lat");
console.log(user1);
console.log(user1.description());
console.log(user2);
console.log(user2.description());
console.log(user3);
console.log(user3.description());
console.log(user4);
console.log(user4.description());