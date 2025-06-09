// 4. Write a javaScript program to find wheter a number is divisible by either 2 or 3

let a= 10;

if(a%2 == 0 && a%3 == 0){
    console.log("This numebr is divisbile by 2 and 3 ");
}

else if(a%3==0){
    console.log("It is divisible by 3 only");
}

else if (a%2==0){
    console.log("It is divisible by 2 only");
}

else{
    console.log("NOt divisible by 2 or 3 number");
}