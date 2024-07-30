//function hoisting
//named function
//annonymous function
//expressional function
//arrow function
//annonymous arrow function
//expressional arrow function
//function constructor
//function expression
//function declaration
//immediately invoked functional expressions
//function expression with arguments

//functional definition
//function calling
//function declaration or prototype of the function
//prototype ===>fucntion name and its properties like "how many arguments are been taken by the function"


function abc(){
    console.log('Hello Peter');
}
abc();


// function sum(a, b){
//     let s = a + b;
//     console.log(`The sum of ${a} and ${b} is ${s}`);
// }
// sum(3, 5);
//positional arguments
//calling of annonymous functions can't be done
//if in above code 'sum' name of function is removed it becomes an annonymous function


// const sum = function (a, ...nums) {
//     // let s = a + b;
//     // console.log(`The sum of ${a} and ${b} is ${s}`);
//     console.log(nums);
// };
// sum(3, 5, 6, 7, 8);


function sum(a, b){
    return a + b;
}
function sub(a, b){
    return b - a;
}
function mul(a, b){
    return a * b;
}
function calculator(a, b, operation){
    return operation(a,b);
}
console.log(calculator(3, 5, sum));
console.log(calculator(3, 5, sub));
console.log(calculator(3, 5, mul));