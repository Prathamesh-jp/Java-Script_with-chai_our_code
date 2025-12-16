// dates 

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2023,0,23)// only for yy/mm/dd
//let myCreatedDate = new Date(2023,0,23,5,3)// only for yy/mm/dd houre  and min
let myCreatedDate = new Date("2024-01-23")
//console.log(myCreatedDate.toLocaleString());


let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//custmize to local string
newDate.toLocaleString('default',{
    weekday: "long",
    
})

