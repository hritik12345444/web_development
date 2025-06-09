// Q. Use reduce to calculate factorial of a given number from an array of first n natural number (n being the whose factorial will be calculated)

let a=4;
let arr=[];
for(let i=0; i<a; i++){ /// fill the array from 1 to a
    arr.push(i+1);
}

console.log(arr);

let res= arr.reduce((a,b) => a*b)
console.log(res);