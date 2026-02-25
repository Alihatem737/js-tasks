// operator challenge 

//-------------1


let a = 10 
let b  = "20"
let c = 80;

console.log(++a + +b++ + +c++ - +a++)
console.log(++a + -b + +c++ - -a++ + +a)
console.log(--c + +b + --a * +b++ - +b * a + --a - +true )


/*

(A)
[11]pre increment + [20]post increment  + [80]post increment  - [11]post increment

(b)
[13]pre increment + [-21] + [81]post increment - [13]post increment + [14]

(c)
[81]pre increment + [21] + [13]pre increment * [22]post increment + [22] * [13] + [12]pre increment   - [1]      

*/



//number challenge

//-------------2 



//(A)
let aa = 1_00;   
let bb = 2_00.5; 
let cc = 1e2;    
let dd = 2.4;

console.log(Math.ceil(Math.min(aa , bb , cc , dd)))


//(B) Use Variable a + d One Time To Get The Needed Output


console.log(Math.pow(aa , Math.floor(dd)))



//(C) Get Integer "2" From d Variable With 4 Methods

console.log(Math.floor(dd));
console.log(dd.toFixed());
console.log(Math.trunc(dd));
console.log(~~dd);




//(D) Use Variable b + d To Get This Values string ->66.67    number ->67


let result = (bb+dd) / Math.ceil(dd)
console.log(result.toString() )
console.log(Math.round(result))










//-------------3


/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let A = "Elzero Web School";

// Include This Methods In Your Solution [slice, charAt]
console.log(A.charAt(2).toUpperCase() +A.slice(3 , 6));// Zero

// 8 H
console.log(A.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(A.slice(0 , 6).split("")); // ["E", "l", "z", "e", "r", "o"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${A.substr(0 , 6) + " " +A .substr(11 , 15) }`); // Elzero School

// Solution Must Be Dynamic And String May Change
console.log(A.charAt(0).toLowerCase()+A.slice(1).toUpperCase()); // eLZERO WEB SCHOOL