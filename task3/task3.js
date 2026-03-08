// 1

let a  ;


a<10 ? console.log(10) 
: a>=10 && a<=40 ? console.log("10to40") 
: a>40 ? console.log ("40") 
: console.log("unknown");




// 2

let st = "Ali Hatem"

if(typeof(st) === typeof("34")){
    console.log("good")
}



// 3


if (st.includes("w")) {
  console.log("Good");
}


// 4


if (typeof st === "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0,6) + st.slice(11,17) === "ElzeroElzero") {
  console.log("Good");
}



// ---------------------------------------



// 1


let job = "Manager";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    break;

  case "IT":
  case "Support":
    salary = 6000;
    break;

  case "Developer":
  case "Designer":
    salary = 7000;
    break;

  default:
    salary = 4000;
}



//2 


let holidays = 0;
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
}
else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
}
else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
}
else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
}
else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
}
else {
  money = 0;
  console.log(`My Money is ${money}`);
}



// --------------------------------



let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];


//1 

console.log(my.slice(counter).reverse()); 

//2
console.log(my.slice(counter - 1, counter + 1).reverse()); 

//3
console.log(my[counter].slice(zero, counter - 1)); 

//4
console.log(my[counter].slice(counter - 1, counter + 1)); 






