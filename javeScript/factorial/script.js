console.log("This is factorial");

// using for loop
// let a=10;
// let res=1;
// for(let i= a; i>1; i--){
//     res= res*i;
// }
// console.log(res);

// using array with reduced method
let arr=[1,2,3,4,5,6];
let res= arr.reduce(function(a,b){
    return a*b;
});

console.log(res);