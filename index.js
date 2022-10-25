// --------- basics - output and comments # 1 ---------
// console.log("Hello World");
// console.log("Do you like pizza?");
// console.log("It's really good.");

// window.alert("I really love it! :D");

// --------- variables # 2 ---------
// let firstName = "Peter"; // string
// let age = 21;            // int
// let student = true;     // boolean 

// //Output into the console
// console.log("Hello", firstName);
// console.log("You are ", age, "Years old.");
// console.log("Enroled:", student);

// //Output into the web-site thro elements in HTML
// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + "Years old";
// document.getElementById("p3").innerHTML = "Enroled: " + student;

// --------- arithmetic operations # 3 ---------
/*      operator precendece in js
        1. parenthesis ()
        2. exponents [number^number] [2^4]
        3. multiplicaiton & division
        4. addition & subraction
*/
// let studets = 20;
// let extraStudents = studets % 3;
// console.log("Extra students are: ", extraStudents);

// --------- user input # 4 --------- 
//let userName = window.prompt("What's your name?");
//console.log("Your name is: ", userName);
// let userName;

// document.getElementById("myButton").onclick = function(){

//     userName = document.getElementById("myText").ariaValueMax;
//     console.log(userName);
//     document.getElementById("myLabel").innerHTML = "Hello" + userName;
// }

// --------- type conversion # 5 --------- 
// let age = window.prompt("How old are you?");
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;
// console.log("Happy BDAY! You are ", age, "years old!");

// --------- Constants # 6 ---------
// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * PI * radius;
// console.log("The circumference is: ", circumference);

// --------- Math # 7 ---------
// let x = 3.52242;
// let y = 5;
// let z = 12;

// let maximum;
// let mininin;

// mininin = Math.min(x, y, z);
// console.log("The minimum of x, y and z is: ", mininin);
// maximum = Math.max(x, y, z);
// console.log("The maximum of x, y and z is: ", maximum);

// --------- Exercise 1 - Hypothenuse #8 ---------
// let a;
// let b;
// let c;

// a = Number(a);
// b = Number(b);

// document.getElementById("calculateHypotenuse").onclick=function(){

//         a = document.getElementById("aTextBox").value;
//         a = Number(a);
//         b = document.getElementById("bTextBox").value;
//         b = Number(b);

//         c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));
//         document.getElementById("cLabel").innerHTML = "Side C: "+ c;
// }

// --------- Exercise 2 - Simple counter program #9 ---------
// let counter = 0;

// // When the decrease button is clicked, execute a function which
// // decreases the counter by -1 and then the result is set on the
// // counter label via the innerHTML method.
// document.getElementById("decreaseButton").onclick = function(){
//         counter -= 1;
//         document.getElementById("countLabel").innerHTML = counter;
// }

// document.getElementById("resetButton").onclick = function(){
//         counter = 0;
//         document.getElementById("countLabel").innerHTML = counter;
// }

// document.getElementById("increaseButton").onclick = function(){
//         counter += 1;
//         document.getElementById("countLabel").innerHTML = counter;
// }

// --------- Exercise 3 - Random number generator #10 ---------
// let x;
// let y;
// let z;
// document.getElementById("rollButton").onclick = function(){
        
//          x = Math.floor(Math.random() * 6) + 1;
//         document.getElementById("xLabel").innerHTML = "X: " + x;
//          y = Math.floor(Math.random() * 6) + 1;
//         document.getElementById("yLabel").innerHTML = "Y: " + y;
//          z = Math.floor(Math.random() * 6) + 1;
//         document.getElementById("zLabel").innerHTML = "Z: " + z;

// }

// --------- Usefull string methods #11 ---------



// --------- To be Continued ---------
// 43:13 reached
// TODO: rewatch and practice 


