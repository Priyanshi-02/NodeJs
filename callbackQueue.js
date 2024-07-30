function purchasecake(callback){
    setTimeout(()=>{
        console.log("Cake purchased");
    },3000);
    callback();
}
function curtaindec(callback){
    setTimeout(() => {
        console.log("Curtain down");
    }, 5000);
    callback();
}
function balloons(callback){
    setTimeout(() => {
        console.log("Balloons released");
    }, 2000);
    callback();
}
function cakecutting(){
    setTimeout(()=>{
        console.log("Cake cutting");
    },2000);
}
purchasecake(()=>{
    curtaindec(()=>{
        balloons(()=>{
           cakecutting();
            // console.log("All Done!");
        });
    });
});