// function purchasecake(){
//     setTimeout(()=>{
//         console.log("Cake purchased");
//     },2000);
// }
// function curtaindec(){
//     setTimeout(() => {
//         console.log("Curtain down");
//     }, 3000);
// }
// function balloons(){
//     setTimeout(() => {
//         console.log("Balloons released");
//     }, 4000);
// }
// function cakecutting(){
//     setTimeout(()=>{
//         console.log("Cake cutting");
//     },5000);
// }

// //callback hell
// console.log("Happy Birthday:1");
// console.log("Happy Birthday:2");
// console.log("Happy Birthday:3");
// purchasecake();
// console.log("Happy Birthday:4");
// console.log("Happy Birthday:5");
// curtaindec();
// console.log("Happy Birthday:6");
// balloons();
// console.log("Happy Birthday:7");
// console.log("Happy Birthday:8");
// cakecutting();
// console.log("Happy Birthday:9");
// console.log("Happy Birthday:10");





function purchasecake(){
    setTimeout(()=>{
        console.log("Cake purchased");
    },3000);
}
function curtaindec(){
    setTimeout(() => {
        console.log("Curtain down");
    }, 5000);
}
function balloons(){
    setTimeout(() => {
        console.log("Balloons released");
    }, 2000);
}
function cakecutting(){
    setTimeout(()=>{
        console.log("Cake cutting");
    },7000);
}

//callback hell
console.log("Happy Birthday:1");
console.log("Happy Birthday:2");
console.log("Happy Birthday:3");
purchasecake();
console.log("Happy Birthday:4");
console.log("Happy Birthday:5");
curtaindec();
purchasecake();
console.log("Happy Birthday:6");
curtaindec();
balloons();
console.log("Happy Birthday:7");
console.log("Happy Birthday:8");
cakecutting();
console.log("Happy Birthday:9");
console.log("Happy Birthday:10");