
// -1 Convert Function To Arrow Function



let names = (...names) =>{

let result = "";


for (let i = 0 ; i< names.length ; i++ ){


result += "[" + names[i]+ "]"



if(i !=names.length-1 ){
   
 result += ",";
}


}

return result  +"=> done"




};


console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"))








// -2 Arrow Function With Rest Parameters


let myNumbers = [20, 50, 10, 60];




let calc = (one, two, ...nums) => {
  let result = one + two;

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }

  return result;
};

console.log(calc(10, 20, 50)); 



//-----------------------------------------------------------------

 // -1 Clean And Transform String Using Higher Order Functions

 let myString = "1,2,3,EE,1,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";




let result = myString.split(",")
.filter((element) => isNaN(element) && element.length ===1)
.map((element) => (element==="_" ? " " : element))
.reduce((acc,current) => acc + current);



console.log(result)












// -2 