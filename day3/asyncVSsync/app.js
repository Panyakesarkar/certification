// //sync

// // console.log("FIRST");
// // console.log("SECOND");
// // console.log("THIRD");




// //async

// console.log("FIRST");
// setTimeout(function(){
//     console.log("IT WILL RUN AFTER 2 SECONDS");
// },2000)
// console.log("THIRD");
// console.log("FOURTH");
// setTimeout(function(){
//     console.log("IT WILL RUN AFTER 5 SECONDS");
// },5000)
// console.log("SIXTH");
// setTimeout(function(){
//     console.log("IT WILL RUN AFTER 7 SECONDS");
// },7000)




// set Interval


// setInterval(function(){
//     console.log("IT WILL RUN AFTER 3 SECONDS");
// },3000)

let count =0;
let intrvlID = setInterval(function(){
    count++;
    console.log(`my count is: ${count}`);

    if (count===10) {
        clearInterval(intrvlID);
        console.log("Task Completed");
        

    }
    
},1000)