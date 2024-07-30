//last in first out(LIFO):- STACK
// function sum(){
//     console.log("6");
//     console.log("7");
// }

// function main(){
//     console.log("1");
//     console.log("2");
//     console.log("3");
//     sum();
//     console.log("4");
//     console.log("5");
// }
// console.log("a");
// console.log("b");
// console.log("c");
// main();
// console.log("d");
// console.log("e");



function sum(){
    console.log("6");
    console.log("7");
}

function main(){
    setTimeout(()=>{
    console.log("1");
    console.log("2");
    console.log("3");
    },5000);  //->runs after 5 seconds and the rest code executes first
    sum();
    console.log("4");
    console.log("5");
}
console.log("a");
console.log("b");
console.log("c");
main();
console.log("d");
console.log("e");