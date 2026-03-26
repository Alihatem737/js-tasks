//1


let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samara"];


let count = 0;




for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  count++;
}

document.write(`<div>We Have ${count} Admins</div>`);




//2


let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];


let groups = {};

for (let i = 0; i < myEmployees.length; i++) {
  let name = myEmployees[i];
  let letter = name[0]; 


  if (groups[letter] === undefined) {
    groups[letter] = [];
  }


  groups[letter].push(name);
}


for (let letter in groups) {
  document.write(`<h3>${letter}</h3>`);

  for (let i = 0; i < groups[letter].length; i++) {
    document.write(`<p>- ${groups[letter][i]}</p>`);
  }
}







//3




function showDetails(a, b, c) {
  let name, age, status;

  let arr = [a, b, c];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") name = arr[i];
    else if (typeof arr[i] === "number") age = arr[i];
    else status = arr[i];
  }

  let hire = status ? "Available For Hire" : "Not Available For Hire";

  document.write(`Hello ${name}, Your Age Is ${age}, You Are ${hire}<br>`);}



showDetails("ali", 38, true);
showDetails(38, "ali", true);
showDetails(true, 38, "ali");
showDetails(false, "ali", 38);