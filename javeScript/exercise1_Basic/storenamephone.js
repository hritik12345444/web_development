// Write a javaScript program to store name, phone number and marks of a student using objects
console.log("Hey! its, a javaScript programe");

let a=2;
const b  = 4;  // const value can't we changed
console.log(b);
// b= 44;  // not valid
// console.log(b);

console.log("This is a data of a particular person");
// create a object that store a above the following
let data ={
    "name" : "Hritik",
    "phone no " : 8383090155,
    "marks " : 384
}

data.salary = "133rupees"; // we can also add data's by using (.) dot operator
console.log(data);
data.name="Sam";  // overwrite the name of this object
console.log(data.name);  // we can also access the particular element using dot(.) operator