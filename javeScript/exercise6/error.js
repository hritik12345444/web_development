// In previous, question use console.error to log the error if the age entered is negative
function fun(age){
    if(age <= 0){
        console.error("error: age can't be negative");// if age is less than 0 than we known invalid age
    }else{
        console.log("valid age",age);
    }    
}

fun(-1);
fun(33);

// console.error ka use krke print krenge to console me ptta chalega ki kya difference hai .error & .log me