let a= document.getElementById("b1");
let b= document.getElementById("b2");
let c= document.getElementById("b3");
let d= document.getElementById("b4");
let col= "red";
a.addEventListener("mouseenter",function(){
    // a.style.backgroundColor="red";
    if(col == "red"){
        a.style.backgroundColor="red";
        col= "green";
    }else if(col == "green"){
        a.style.backgroundColor="green";
        col= "blue";
    }else{
        a.style.backgroundColor="blue";
        col= "red";
    }
});
a.addEventListener("mouseleave",function(){
    a.style.backgroundColor="white";
});


b.addEventListener("mouseenter",function(){
    let num= Math.floor(Math.random()*100);
    b.innerHTML=`<h1>${num}</h1>`;
});
b.addEventListener("mouseleave",function(){
    b.innerHTML="<h1>K</h1>";
})


c.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256); 
    c.style.backgroundColor= `rgb(${r1},${r2},${r3})`;
})
c.addEventListener("mouseleave",function(){
    c.style.backgroundColor="white";
})


d.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256); 
    a.style.backgroundColor=`rgb(0,${r2},0)`;
    b.style.backgroundColor=`rgb(0,0,${r3})`;
    c.style.backgroundColor=`rgb(${r1},0,0)`;
})
d.addEventListener("mouseleave",function(){
    a.style.backgroundColor="white";
    b.style.backgroundColor="white";
    c.style.backgroundColor="white";
})



console.log(a); // agar print kree to pura element hi print ho jayega kyuki a ke through hmm kisi element to select kiye hai getElementById se