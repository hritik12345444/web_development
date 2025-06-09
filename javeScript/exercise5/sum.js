// parsent use for convert string into integer
// prompt is use to show a dialog box and return a string . prompt ke through jo value input krenge wo string hoga na ki kuch aur

// Q. Create an array of number and take input from user to add number to this array
alert("this is browser based question");

let size_Array = parseInt(prompt("Enter size of array"));
let arr=[]; // create an empty array

for(let i=0; i<size_Array; i++){
    let num= parseInt(prompt(`enter element ${i}`));
    arr.push(num);
}

console.log(arr);
let res=0;
for(let i=0; i<size_Array; i++){
    res+= arr[i];
}
console.log(`this is the sum of arrya ${res}`);

// COMPLETE