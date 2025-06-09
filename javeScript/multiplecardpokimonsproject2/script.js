let main= document.getElementById("main");
// Here arr is a array of links of Image
let arr=
["https://i.pinimg.com/736x/8a/44/39/8a4439689a4b1df26491f7e8b257fbe0.jpg",
"https://i.pinimg.com/736x/1d/85/c2/1d85c2c8f52440ad0d4077a0ff0c85c8.jpg",
"https://i.pinimg.com/736x/54/94/bd/5494bd33caf16faf6de8aad555016599.jpg",
"https://i.pinimg.com/736x/8f/9b/6e/8f9b6e3246a3226c3fc90792cb384039.jpg",
"https://i.pinimg.com/736x/9c/22/88/9c2288407d7048fbb73e4a736dc4306d.jpg"]

let s= "";
for(let i=1; i<=65; i++){
    let ran_idx= Math.floor(Math.random()*arr.length);
    s+=`<div class="card">
            <img src="${arr[ran_idx]}">
    </div>`
}
main.innerHTML=s;