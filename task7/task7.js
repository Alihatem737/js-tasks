// Open the link that has class "open" and text "Elzero"
 /*
window.onload = function () {


for(let i =0 ; i< document.links.length ; i++ ){


if (document.links[i].classList.contains("open")){
    if(document.links[i].textContent === "Elzero"){
        window.open(document.links[i].href)
    }
}
}



}

*/








// Add and remove classes from the current element


/*


let input = document.querySelector(".classes-to-add")

let removeinput = document.querySelector(".classes-to-remove")



let mydiv = document.querySelector(".element.current")




input.onblur = function(){
    let arrclasses = input.value.split(" ")
    for(let i = 0 ; i<arrclasses.length ; i++){
 mydiv.classList.add(arrclasses[i].toLowerCase())
    }
    
   
} 



removeinput.onblur = function(){
    
    if(removeinput.value != null){
        let removearr = removeinput.value.split(" ")



        for (let i = 0; i < removearr.length; i++) {

            mydiv.classList.remove(removearr[i].toLowerCase());

        }

        removeinput.value="";
    }
}


*/





// Remove paragraph and add elements before and after div

/*

let myp = document.querySelector("p")

myp.remove();

let mydiv = document.querySelector("div")

let element1 = document.createElement("div") 
element1.classList.add("start")
element1.setAttribute("title" , "Start Element")
element1.setAttribute("data-value" , "Start")
element1.textContent="Start"
mydiv.before(element1)




let element2 = document.createElement("div");
element2.classList.add("end");
element2.setAttribute("title", "End Element");
element2.setAttribute("data-value", "End");
element2.textContent = "End";
mydiv.after(element2);


*/












// setTimeout(function () {
//     console.log("msg");
    
// } , 2000)



// function saymsg(){
//     console.log("i am ali");
    
// }
 
// setTimeout(function () {
//     saymsg()
    
// } , 2000)




// Get "Elzero" text from the text node inside the div





let text = document.querySelector("div")

console.log(text.childNodes[4].textContent);








// Print the element type when clicking any element


let elements = document.querySelectorAll("div, span, p, article, section");

for (let i = 0; i < elements.length; i++) {

    elements[i].onclick = function () {

    
        console.log("this is " + elements[i].tagName)

    };


}






// Prompt Number Range


let myprompt= window.prompt( "Print Number From – To" ,"Example: 5-20")

let numbers = myPrompt.split("-");


let firstNumber = Number(numbers[0]);
let secondNumber = Number(numbers[1]);


let start = Math.min(firstNumber, secondNumber);
let end = Math.max(firstNumber, secondNumber);

for (let i = start; i <= end; i++) {
  document.write(i + "<br>");
}





// Popup After 5 Seconds


function createpopup(){
    let popup = document.createElement("div")

    let heading = document.createElement("h3")
    heading.textContent= "welcome";

     let paragraph = document.createElement("p");
  paragraph.textContent = "Welcome To Elzero Web School";

  let closeButton = document.createElement("button");
  closeButton.textContent = "Close";


  popup.appendChild(heading)
  popup.appendChild(paragraph)
  popup.appendChild(closeButton)


  document.body.appendChild(popup)

  closeButton.onclick = function(){

    popup.remove();
  }
}

setTimeout(createpopup , 5000)









//Countdown Counter

let mydiv = document.querySelector("div");

let timer = setInterval(function () {
  mydiv.innerHTML--;

  if (mydiv.innerHTML == 0) {
    clearInterval(timer);
  }
}, 1000);




//Countdown Redirect




let timer = setInterval(function () {
  mydiv.innerHTML--;

  if (mydiv.innerHTML == 0) {
    clearInterval(timer);
    window.location.href = "https://elzero.org";
  }
}, 1000);




// Countdown Open Popup



let timer = setInterval(function () {
  mydiv.innerHTML--;

  if (mydiv.innerHTML == 5) {
    window.open("https://elzero.org", "_blank");
  }

  if (mydiv.innerHTML == 0) {
    clearInterval(timer);
  }
}, 1000);
