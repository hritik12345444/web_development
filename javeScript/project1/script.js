let b1= document.getElementById("box1");
let b2= document.getElementById("box2");
let b3= document.getElementById("box3");
let b4= document.getElementById("box4");
let b5= document.getElementById("box5");


// This functin return a random color 
function getRandomColor(){
    let r1= Math.floor(Math.random()*256);
    let r2= Math.floor(Math.random()*256);
    let r3= Math.floor(Math.random()*256);
    return `rgb(${r1},${r2},${r3})`;
}

let conta= document.getElementById("container");
// conta.firstElementChild.style.backgroundColor="green"
conta.addEventListener("mouseenter",function(){
    b1.style.backgroundColor=getRandomColor();
    b2.style.backgroundColor=getRandomColor();
    b3.style.backgroundColor=getRandomColor();
    b4.style.backgroundColor=getRandomColor();
    b5.style.backgroundColor=getRandomColor();
})
conta.addEventListener("mouseleave",function(){
    b1.style.backgroundColor="white"
    b1.style.backgroundColor="white"
    b2.style.backgroundColor="white"
    b3.style.backgroundColor="white"
    b4.style.backgroundColor="white"
    b5.style.backgroundColor="white"
})