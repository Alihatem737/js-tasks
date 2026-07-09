
//1



let fontselect = document.querySelector("#fontSelect")
let colorselect = document.querySelector("#colorSelect")
let sizeselect = document.querySelector("#sizeSelect")

let p = document.querySelector("#text")


let savedFont = localStorage.getItem("font");


if (savedFont) {
    p.style.fontFamily = savedFont;
    fontselect.value = savedFont;
}

let savedColor = localStorage.getItem("color");

if (savedColor) {
    p.style.color = savedColor;
    colorselect.value = savedColor;
}



let savedSize = localStorage.getItem("size");

if (savedSize) {
    p.style.fontSize = savedSize;
    sizeselect.value = savedSize;
}


fontselect.addEventListener("change" , function(){
  
    let font = fontselect.value 


    


    localStorage.setItem("font",p.style.fontFamily =font )
    
   
    

})




colorselect.addEventListener("change" , function(){
  
    let color = colorselect.value


    
    
       localStorage.setItem("color",p.style.color =color )

    

})



sizeselect.addEventListener("change" , function(){
  
    let size = sizeselect.value


    
    
   
    localStorage.setItem("size",p.style.fontSize =size )


})











//2

let nameinput = document.querySelector("#name");
let emailinput = document.querySelector("#email");
let ageinput = document.querySelector("#age");
let countryselect = document.querySelector("#country");



nameinput.value = sessionStorage.getItem("name")
emailinput.value = sessionStorage.getItem("email")
ageinput.value = sessionStorage.getItem("age")
countryselect.value = sessionStorage.getItem("country")






nameinput.addEventListener("input" , ()=> {

    sessionStorage.setItem( "name", nameinput.value)
})


emailinput.addEventListener("input" , ()=> {

    sessionStorage.setItem( "email", emailinput.value)
})



ageinput.addEventListener("input" , ()=> {

    sessionStorage.setItem( "age", ageinput.value)
})




countryselect.addEventListener("change" , ()=>{

    sessionStorage.setItem( "country", countryselect.value)
})











// Numbers Task


let myNumbers = [1, 2, 3, 4, 5];


// let [a , b , c , d , e] = myNumbers


// console.log(a * e); // 5




// Skills Task


let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];



// let [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);






// Friends Task


let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];


arr3.shift();

let result = arr3.concat(arr1)

// let [a, b , c ]= result



// console.log(`My Best Friends: ${a}, ${b}, ${c}`);





// Member Task



const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};



// let { age: a,
//     working : w,
//     country : c ,
    
//     hobbies : [h1 , , h3 ]
    
// } = member;



// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);

// console.log(`I Live in ${c}`);

// console.log(`My Hobbies: ${h1} And ${h3}`);








// Game Task



const game = {
  title: "YS",
  developer: "Falcom",

  releases: {
    "Oath In Felghana": ["USA", "Japan"],

    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },


    Origin: "30 USD",
  },
};




// let {title:t,
//     developer:d, 

//     releases : {"Oath In Felghana" :[u , j]}



// }= game


// let o = "Oath In Felghana";

// console.log(`My Favourite Games Style Is ${t} Style`);

// console.log(`And I Love ${d} Games`);

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);








// Friends Data

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let  [o , a , s] = myFriends

let {
    title : t
} = o 

if(chosen ==1 ){


    console.log(t)
}

























window.localStorage.setItem("color" , "red")
window.localStorage.font=("799")




console.log(window.localStorage.getItem("color"));



window.localStorage.removeItem("color")



document.body.style.backgroundColor = window.localStorage.getItem("color");




let lis = document.querySelectorAll("ul  li")

let exp = document.querySelector(".experiment")


if(window.localStorage.getItem("color")){
    exp.style.backgroundColor= window.localStorage.getItem("color")


     lis.forEach((li) => {
        li.classList.remove("active")
       })


       document.querySelector(`[data-color = ""]`)
}
else{
    console.log("no");
    
}


lis.forEach((li) => {
    li.addEventListener("click" , (e) => {
       // console.log(e.currentTarget.dataset.color)

       lis.forEach((li) => {
        li.classList.remove("active")
       })


       e.currentTarget.classList.add("active");

       window.localStorage.setItem("color" ,e.currentTarget.dataset.color )



       exp.style.backgroundColor= e.currentTarget.dataset.color
    })
})








window.sessionStorage.setItem("color" , "red")


console.log("--------------------------------")

let myfriend = ["Ali" , "Ahmed" , "Sayed"]



let [Ali , Ahmed ,Sayed ]= myfriend



console.log(Ali , Ahmed)