function normalFunction(){
     console.log(this);
}
const Arrowfunction=()=>{
    console.log(this);
};
const obj={
    normalfxnmethod: normalFunction,
    arrowfxnmethod: Arrowfunction,
};
obj.normalfxnmethod();
obj.arrowfxnmethod();


//features    regular func      arrow