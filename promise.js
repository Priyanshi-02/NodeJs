async function purchasecake(){
    // return new Promise(()=>{
        setTimeout(()=>{
            console.log("Cake purchased");
        },2000);
    // })
}
async function curtaindec(){
    setTimeout(() => {
        console.log("Curtain down");
    }, 5000);
}
async function balloons(){
    setTimeout(() => {
        console.log("Balloons released");
    }, 2000);
}
async function cakecutting(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        },2000);
        console.log("Cake Cutting")
    });
}   
// purchasecake()
// .then(()=>curtaindec())
// .then(()=>balloons())
// .then(()=>cakecutting())
// .catch((e)=>console.log(e))
// .finally(()=>console.log("Happily Ended"));


// async await
async function birthdaycelebration(){
    try{
        await purchasecake();
        await curtaindec();
        await balloons();
        await cakecutting();
    }
    catch(e){
        console.log(e);
    }
}
birthdaycelebration();