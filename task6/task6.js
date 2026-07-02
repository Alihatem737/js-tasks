


// let user = {

//     name: "ali" , 
//     age : 12,


//     sayhello : function(){
//         console.log("hello");
//     }



// };


// console.log(user.sayhello())







// let user = new Object({
//   age: 20,
// });

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());











// myVar = 100;


// console.log(this.myVar);

// function sayHello() {
//   console.log(this);
//   return this;
// }


// sayHello();



// document.getElementById("b1").onclick = function () {
//   console.log(this);
// };

// let user = {
//   age: 38,
//   ageInDays: function () {
//     console.log(this);
//     return this.age * 365;
//   },
// };

// console.log(user.age);
// console.log(user.ageInDays());






// let user = {
//   age: 20,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(user);

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());









// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };



// let targetObject = {
//   prop1: 100,
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;
// finalObject.prop4 = 4;

// console.log(finalObject);









// let myelement = document.getElementById("my-div")
// let mytag = document.getElementsByTagName("p")
// let myclass = document.getElementsByClassName("my-span")
// let myclass = document.querySelector(".my-span")





// console.log(myelement);
// console.log(mytag[1].innerHTML = "test");





// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);







// let myelement = document.querySelector(".js")




// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <span>div</span> File";
// myElement.textContent = "Text From <span>Main.js</span> File";



// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://twitter.com");
// myLink.setAttribute("title", "Twitter");




// console.log(document.getElementsByTagName("p")[0].attributes);


// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttributes()) {
//   console.log(`Has Attributes`);
// }






// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");


// let myText = document.createTextNode("Product One");




// myElement.className = "product";


// myElement.setAttributeNode(myAttr);

// myElement.setAttribute("data-test", "Testing");




// myElement.appendChild(myText);


// document.body.appendChild(myElement);








// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");




// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);



let userinput = document.querySelector("[name='username']")
let ageinput = document.querySelector("[name='age']")


document.forms[0].onsubmit = function(e){


    let uservalid = false;
    let agevalid = false;


    console.log(userinput.value);
    console.log(userinput.value.length);


    if(userinput.value !== ""  && userinput.value.length <=10 ){
        uservalid=true;
    }

    if(ageinput.value !== ""   ){
        agevalid=true;

    }

    


    if(uservalid === false || agevalid === false){
        e.preventDefault();
    }

}



document.links[0].onclick = function(event){

    console.log(event);
    event.preventDefault();

}







