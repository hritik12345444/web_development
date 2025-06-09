// faulty calculator , but is already given


// let a = Math.random(); 
// if(a > 0.1){
//     // console.log("thre");
// }
// else{
//     // console.log("sfa");
// }


/* crete a fulty calculator using javascriprt
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ----> +
- ----> /
/ ----> ** (exponent)


It performs wrong operation 10% of the times
*/

let  ran= Math.random(); // Generate a random number between 0 and 1 
console.log(ran);
let num1 = 30;
let num2 = 5;
let oper = '*';

if(oper == '+' && ran > 0.1){  /// right
    console.log (num1 + num2);
}else if(oper == '+' && ran < 0.1){  // wong
    console.log(num1-num2);
}else if(oper == '-' && ran > 0.1){ // r
    console.log (num1 - num2);
}else if(oper == '-' && ran < 0.1){ // w
    console.log(num1 / num2);
}else if(oper == '/' && ran > 0.1){ // r
    console.log (num1 / num2);
}else if(oper == '/' && ran < 0.1){ //w 
    console.log(num1 ** num2);
}else if(oper == '*' && ran > 0.1){  //r
    console.log (num1 * num2);
}else if(oper=='*' && ran < 0.1){ //w
    console.log(num1 + num2);
}


// correct but yeha user ke through input nhi liye hai 