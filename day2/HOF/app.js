

//case1

// function a(b) {
//     console.log("I'M inside fun a");
//     b();
    
// }
// function b() {
//     console.log("I'M inside fun b");
// }

// console.log(a(b));


// case 2
function a() {
    console.log("I'M inside fun a");

    function b() {
        console.log("I'M inside fun b");
    }
    return b;   
}
let ans= a();
console.log(ans());
