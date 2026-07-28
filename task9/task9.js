// Array Destructuring

// let myNumbers = [1, 2, 3, 4, 5];

// let [a,,,,e] = myNumbers

// console.log(a * e); // 5








// Nested Destructuring

// let mySkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   ["PHP", "Python", ["Django", "Laravel"]],
// ];

// let [a,b,c,[d,e,[f,g]]] = mySkills

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);







// Array Challenge

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];


// let array = [...arr3.slice(1) , arr1[0]]

// let[a , b,c]= array



// console.log(`My Best Friends: ${a}, ${b}, ${c}`);








// Object Destructuring

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// let{
//     age:a,
//     working : w,
//     country:c,
//     hobbies :[h1 ,  ,h3]

// } =member

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// console.log(`I Live in ${c}`);
// console.log(`My Hobbies: ${h1} And ${h3}`);












// Game Destructuring

// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };




// let [o, a] = Object.keys(game.releases);

// let {
//     title:t,
//     developer:d,
//     releases : {
//     [o] : [u,j] , 
//     [a] : {
//         US: u_price,
//       JAP: j_price,
//     },
//     Origin :or
//     },
   
 
// } = game
















// Friend Selection

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];



let{
    title,
    age,
    available ,
    skills : [,secondSkill],
} =myFriends[chosen-1]



console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(secondSkill);













// Set Basics


let setOfNumbers =  new Set([10])

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log([...setOfNumbers].pop());











// Unique Friends

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];


// console.log([...new Set(myFriends)].sort());












// Object Map

// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };



// let myinfomap = new Map(Object.entries(myInfo)) ;

// console.log(myInfoMap);
// console.log(myInfoMap.size);
// console.log(myInfoMap.has("role"));







// Number Cleanup

// let theNumber = 100020003000;


// console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""))











// String Array

// let theName = "Elzero";


// console.log([...theName])
// console.log(theName.split(""));
// console.log(Array.from(theName));
// console.log(Object.assign([], theName));
// let [a, b, c, d, e, f] = theName;
// console.log([a, b, c, d, e, f])










// Array Replacement

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];


// let numbersCount = chars.filter(
//   element => typeof element === "number"
// ).length;

// chars.sort();

// chars.copyWithin(0, numbersCount, numbersCount*2 );


// console.log(chars);







// Array Merging

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];



// console.log([...numsOne , ...numsTwo]);











// Number Challenge

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// Write Your Code Here


// let len = [...n1 , ...n2].length




// console.log(Math.max(...n1) * len);









// IPv6 Match

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";


let ipre = /^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i;



console.log(ip.match(ipre));






// Special Names


let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";


let specialnamere = /\bOs\d*O\b/g

console.log(specialNames.match(specialnamere));




 


// Phone Match


let phone = "+(995)-123 (4567)";



let phonere =  /^\+\(\d{3}\)-\d{3} \(\d{4}\)$/


console.log(phone.match(phonere));








// Date Match


let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /^\d{2}(?:\/| - | )\d{2}(?:\/| - | )\d{2,4}$/

console.log(date1.match(re));
console.log(date2.match(re));
console.log(date3.match(re));
console.log(date4.match(re));






// Car Class





class Car {
    constructor(name , model , price){
  this.n = name;
  this.m = model;
  this.p = price;
    }


    run(){
        return "Car Is Running Now"
    }

    stop(){
        return "Car Is Stopped";
    }
}


let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("KIA", 2024, 450000);
let carThree = new Car("TOYOTA", 2026, 550000);


console.log(carOne.run() );

console.log( `Car One Name Is  ${carOne.n}And Model Is ${carOne.m}And Price Is ${carOne.p}`)





// Tablet Class



class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}


class Tablet extends Phone {

  
    constructor(name , serial , price , size= "Unknown"){
        super(name , serial , price)

        this.size = size

    }

    fullDetails(){
        return `${this.name} Serial is ${this.serial} And Size ${this.size}`
    }

}



let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);







// User Card
class User {
  #card;

  constructor(username, card) {
    this.u = username;

    this.#card = String(card)
      .replace(/-/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1-");
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#card}`;
  }
}


let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
console.log(userTwo.showData);
console.log(userThree.showData);

console.log(userOne.c); 


// end tasks

































/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// let mystring = "i love Ali my ali"

// let regex = /ali/ig;


// console.log(mystring.match(regex));






// let tld ="com net info code io"
// let tldre = /(org|info|io)/ig
// console.log(tld.match(tldre));





// let nums = "12345678910"
// let numsre =/[0-9]/g;
// console.log(nums.match(numsre));




// let notnums = "12345678910"
// let notnumsre =/[^0-2]/g;
// console.log(notnums.match(notnumsre));





// let special = "123@456%789#10"
// let specialre =/[^0-9]/g;
// console.log(special.match(specialre));




// let practice = "os1 os2 os8 8os8s"
// let practicere =/os[5-9]s/g;
// console.log(practice.match(practicere));




// let myatoz="AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// console.log(myatoz.match(atozSmall));




// let email = 'oge@g ... com-o@g.com-o@g.net.A@y.com-0-g.com-o@s.org.1@1.com';

// let dot = /./g


// console.log(email.match(dot));


// let dot = /./g;
// let word=/\w/g;
// let valid=/\w@\w/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));












// let mails="o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
// let nums ="0110 10 150 05120 0560 350 00";
// let urls="https://google.com http://www.website.net web.com";



// let mailsRe=/\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums ="0110-10-150.05120.0560.350.00"; 
// let numsRe=/0\d*0/ig;
// console.log(nums.match(numsRe));

// let urls = "https://google.com.http://www.website.net web.com";
// let urlsRe=/https ?: \/\/(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));






// let serials ="S100S S3000S S50000S S950000S";





// console.log(serials.match(/s\d{3}s/));







// let txt = "We Love Programming And @ Because @ Is Amazing";


// console.log(txt.replace("@" , "java"));
// console.log(txt.replaceAll("@" , "java"));






// document.getElementById("register").onsubmit = function(){


//     let phoneinput = document.getElementById("phone").value;
//     let phonereg = /\(\d{4}\)\s\d{3}-\d{4}/;
//     let validition = phonereg.test(phoneinput)
//     console.log(validition);
//     return false;
    

// }










// class User {


//     static count = 0

//     #salary;
//     constructor(id, username , salary) {

//         this.id = id;
//         this.username = username || "unknow";
//         this.#salary = salary

        

//         this.msg = function (){
//         }


        
//     }
    
//     getsalary (){
//         return parseInt(this.#salary)
//     }
// }





class admin extends User {
    constructor(id , username , permision){
        super(id , username)
        this.permision = permision;
    }
}


let userone = new User(1 , "ali" , 300)


console.log(userone.id);





console.log(userone.username);


console.log(userone.updatename("Khaled"));












Object.defineProperty(myobject , "c" , {
    writable : true,
    configurable : true ,
    enumerable : true ,
     value : 3
})


