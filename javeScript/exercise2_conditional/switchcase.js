// 2. Demonstrate the use of switch case statements in javaScript
let day= "Monday";

switch (day){
    case "Monday" :
        console.log("First day of week");  // if day == monday it will be executed
        break;
    case "Wednesday":
        console.log("MidWeek already !");  // if wednesday it will be executed
        break;
    case "Friday" :
        console.log("Weekend is near"); // if day == friday it will be executed
        break;
    case "Sunday":
        console.log("It's a relaxing day !");  // if day == sunday it will be executed
        break;
    default:     
        console.log("It's a another day");  // if day != these day it will be executed
}