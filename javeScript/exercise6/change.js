// Q. write a program to change the url to google.com (redirection) if user enter a number greater than 4

let num= parseInt(prompt("enter a numebr"));
let at= document.querySelector("a");


if(num > 4){
    window.location.href="https://www.google.com/"
}
else{
    alert("number is not greater than 4")
}

// again try but before watch the concept on youtube