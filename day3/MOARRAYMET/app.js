 
//for each()

// let arr = [1,2,3,4,5];
// arr.forEach(function(i,index){
//     console.log(` my index is ${index} and value is ${i*i}`);
// })


//map()
// let arr = [1,2,3,4,5];
// let newarray = arr.map(function(i,index){
//     console.log(`${i*i}`);
// })
// console.log(newarr);

//filter

let ARR=[1,2,3,4,5];
let newArray = ARR.filter(function(i,index){

    if (i>=3) {
        console.log(i);
        return true;
    }
    return false;
})
console.log(newArray);
