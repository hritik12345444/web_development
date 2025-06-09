// Faulty calculator , in this faulty calcularot given wrong answer 10% of time


// + ---> -
// * ----> +
// - ----> /
// // / ----> ** (exponent)

console.log("Hey, this is faulty calculator ");

let a= prompt("enter first number ");  // take first number 
console.log(a);
console.log(typeof a);
let ope = prompt("enter operator ");  // take a operator
console.log(ope);
console.log(typeof ope);
let b = prompt("enter 2nd number"); // take 2nd number
console.log(b);
console.log(typeof b);


// math.random() get lise between 0 and 1
let ra = Math.random() * 10;  // this random number get lies between 0 and 10 excepted 10
ra = Math.floor(ra);
console.log(ra , "and this is a random value");


if(ra > 1){
    switch (ope) {
        case "+" :
            console.log(parseInt(a) + parseInt(b) , "Is the sum of given no");   // parseInt convert a string into integer number
            break;
        case "-" :
            console.log(parseInt(a) -parseInt(b) , "Is the subtract of given no");
            break;
        case "*" :
            console.log(parseInt(a) * parseInt(b) , "Is the multply of given no");
            break;
        case "/" :
            console.log(parseInt(a) / parseInt(b) , "Is the divide of given no");
            break;    
    }
}else{
    switch (ope){
        case "+" :
            console.log(parseInt(a) - parseInt(b) , "this is faulty answer");
            break;
        case "-" :
            console.log(parseInt(a) / parseInt(b) , "this is faulty answer");
            break;
        case "*" :
            console.log(parseInt(a) + parseInt(b) , "this is faulty answer");
            break;
        case "/" :
            console.log(parseInt(a) ** parseInt(b) , "this is faulty answer");
    }
}