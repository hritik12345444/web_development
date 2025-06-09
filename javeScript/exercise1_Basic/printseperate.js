// Print first keys and than values in another line

// cerate a object
let student={
    "Name" : "Hritik",
    "course" : "BCA",
    "R_no" : 37,
    "College" : "College of commerce arts & science"
};

const keys = Object.keys(student); // all keys values are stored in this keys
console.log(keys);  // print only keys

let value= Object.values(student);// all values are stored in this value
console.log(value); // print only value of student object

console.log(student); // print key and values both together