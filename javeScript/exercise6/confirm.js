// Q. In question 1 confirm to ask the user if he wants to see the prompt again

function fun(){
    let age= parseInt(prompt("enter age"));
    if(age > 0 && age<18){
        alert("you can't drive");
        if(confirm("Will you want to enter another age again ?")){// if user click on yes than again fun function    will be called
            fun();
        }
    }
    else alert("you can drive");
}

fun();

// WORKING