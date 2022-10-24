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
let x = 3.52242;
let y = 5;
let z = 12;

let maximum;
let mininin;

mininin = Math.min(x, y, z);
console.log("The minimum of x, y and z is: ", mininin);
maximum = Math.max(x, y, z);
console.log("The maximum of x, y and z is: ", maximum);

// --------- To be Continued ---------
// 36:54 reached
// TODO: rewatch and practice 

// REDOING THE JS COURSE BY BRO-CODE AGAIN

let userName;
document.getElementById("myButton").onclick = function(){

        userName = document.getElementById("myText").value;
        console.log("Hello", userName, ". Enjoy your stay :)");
        document.getElementById("myLabel").innerHTML = "Hello"+ userName;
}

