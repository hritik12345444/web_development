// Q. Change the background of the page to yellow , red or other color based on user input through prompt

alert("Please, enter only red , yellow , green color");
let col= prompt("enter a color_name"); // take color input through user
let pg= document.body;   // select the page of document
if(col == "red"){  // check the condition which one is executed
    pg.style.backgroundColor= "red";
}else if(col=="yellow"){
    pg.style.backgroundColor="yellow";
}else{
    pg.style.backgroundColor="green";
}