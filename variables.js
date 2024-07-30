//scope
// a = 10;
// function variable(){
//     {
//     var a = 50;
//     console.log(a);
// }
// console.log(a);
// }
// variable();
// console.log(a);

//hoisting
// console.log(a);
// var a=5;
// console.log(a);


// a=5;
// console.log(a);


//mutability: changes allowed->mutation: state update
//const is immutable variable
//immutability: changes not allowed
//reassignment: overlapping previous values
//reassignment property shown by both var and let


// var a = 5;
// var a = 10;
// console.log(a);


// let a = 5;
// let a = 10;
//  console.log(a);



// let a = 5;
// var a = 10;
// console.log(a);  will give error as variable 'a' is already defined using 'let'

// a = 5;
// function variable(){
//     console.log(a);
// }
// console.log(a);


// a = 5;
// function variable(){
//     console.log(a);
// }
// variable();
// console.log(a);


a = 5;
function variable(){
    let a = 15;
    let b = 5;
    console.log(a);
    console.log(b);
}
variable()