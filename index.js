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
// let userName = "Peter Peev";
// let nameLength = userName.length;
// console.log("The length of the username is: ", nameLength);
// let firstLetter = userName.charAt(0);
// console.log("The first letter of the username is: ", firstLetter);
// indexLetter = userName.indexOf("r");
// console.log("The letter you are looking for is at index: ", indexLetter);
// console.log("The last occurence of 'e' is: ", userName.lastIndexOf("e"));

// --------- checked property #15 ---------
// document.getElementById("myButton").onclick = function(){
//         const myCheckBox = document.getElementById("myCheckBox"); 
//         const visaBtn = document.getElementById("visaBtn");
//         const mastercardBtn = document.getElementById("mastercardBtn");
//         const paypalBtn = document.getElementById("paypalBtn");

//         if (myCheckBox.checked) {
//         console.log("You are subscribed!");                
//         } else {
//         console.log("You are NOT subscribed");
//         }

//         if (visaBtn.checked) {
//                 console.log("You are paying with Visa");
//         } else if(mastercardBtn.checked){
//                 console.log("You are paying with MasterCard.");
//         } else if(paypalBtn.checked){
//                 console.log("You are paying with PayPal.");
//         } else {
//                 console.log("You must select a payment type!");
//         }
// }

// --------- switch #16 ---------
// let grade = 6;

// switch(grade){
//         case 6:
//                 console.log("Excellent");
//                 break;
//         case 5:
//                 console.log("Good");
//                 break;
//         case 4:
//                 console.log("Not bad");
//                 break;
//         case 3:
//                 console.log("Barely passed");
//                 break;
//         case 2:
//                 console.log("Failed");
//                 break;
//         default:
//                 console.log(grade, " is not a grade.");
// }

// --------- while loop #19 ---------
// let counter = 0;
// while(counter<10){
//         console.log("Counter is at: ", counter);
//         counter++;
// }

// --------- for loop #21 ---------
// for(let i = 0; i < 10; i++){
//         console.log("Counter is at: ", i);
// }

// --------- nested for loop #23 ---------
// let rows = window.prompt("Enter number of rows:");
// let colums = window.prompt("Enter numbe rof colums");
// let symbol = window.prompt("Enter a symbol to use: ");
// for(let i = 0; i < rows; i++){
//        for(let j = 0; j < colums; j++){
//         document.getElementById("myRectangle").innerHTML += symbol;
//         }
//         document.getElementById("myRectangle").innerHTML += "<br>";
// }

// --------- functions #24 ---------
// startProgram();
// function startProgram(){
//         let userName = "Peter";
//         let age = 24;
//         happyBirthday(userName, age);
// }

// function happyBirthday(userName, age){
//         console.log("Happy birtday to you!");
//         console.log("Happy birtday to you!");
//         console.log("Happy birtday dear ", userName);
//         console.log("Happy birtday to you!");
//         console.log("You are ", age, " years old!");
// }

// --------- return statement #25 ---------
// let area;
// let width;
// let height;

// width =  window.prompt("Enter width");
// height = window.prompt("Enter heinght");
// area = getArea(width, height);
// console.log("The are is:", area);

// function getArea(width, height){
//         return width * height;
// }

// --------- ternary operator #26 ---------
// let adult = checkAge(21);
// console.log(adult)

// function checkAge(age){
//         return age >= 18 ? true : false;
// }

// --------- template literals #28 ---------
// let userName = "Peter";
// let items = 3;
// let total = 75;

// // Solution 1
// // console.log("Hello", userName);
// // console.log("You have ", items, "items in your cart");
// // console.log("Your total is $", total);

// // Solution 2
// // console.log(`Hello ${userName}`);
// // console.log(`You have ${items}`);
// // console.log(`Your total is $${total}`);

// // Solution 3
// let text = `Hello ${userName}
//   You have ${items} items
//   Your total is $${total}`;
// console.log(text);

// --------- format currency #29 ---------
// let myNum = 12345.3377;
// //myNum = myNum.toLocaleString("bg-BG");
// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// console.log(myNum);
//  let myNumBG = 222333.12345;
//  myNumBG = myNumBG.toLocaleString(undefined, {style: "currency", currency: "BGN"});
// console.log(myNumBG);

// --------- number guessing game #30 ---------
// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function(){
//         let guess = document.getElementById("guessField").value;
//         guesses ++;
       
//         if(guess == answer){
//                 alert(`${answer} is the number. It took you ${guesses} guesses`);
//         } else if(guess < answer) {
//                 alert("too small!");
//         } else {
//                 alert("too large");
//         }
// }

// --------- temperature conversion program  #31 ---------
// document.getElementById("submitButton").onclick = function(){

//         let temp;

//         if(document.getElementById("cButton").checked){
//                 temp = document.getElementById("textBox").value;
//                 temp = Number(temp);
//                 temp = toCelsius(temp);
//                 document.getElementById("tempLabel").innerHTML = temp + "C°";
//         }
//          else if(document.getElementById("fButton").checked){
//                 temp = document.getElementById("textBox").value;
//                 temp = Number(temp);
//                 temp = toFahrenheit(temp);
//                 document.getElementById("tempLabel").innerHTML = temp + "F°";
//         } 
//         else {
//                 document.getElementById("tempLabel").innerHTML = "Select a unit";
//         }

// }
// function toCelsius (temp){
//         return (temp - 32) * (5/9);
// }

// function toFahrenheit(temp){
//         return temp * 9 / 5 + 32;
// }

// --------- arrays  #32 ---------
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits);
// console.log(fruits[2]);

// --------- loop through an array  #33 ---------

// let prices = [5, 10, 15, 20];

// for(let i = 0; i< prices.length; i++){
//         console.log(prices);
//         console.log(prices[i]);
// }

// for(let price in prices){
//         console.log(Number(price));
//         console.log(typeof(price));
// }

// --------- loop through an array of strings  #34 ---------

// let fruits = ["banana", "apple", "orage", "coconut"];
// fruits = fruits.sort().reverse();

// for(let fruit of fruits){
//         console.log(fruit);
// }

// --------- 2D array  #35 ---------
// let fruit = ["banana", "apple", "orage"];
// let vegetables = ["carrot", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruit, vegetables, meats];

// for(let list of groceryList){
//         for(let food of list){
//                 console.log(food);
//         }
// }

// --------- spread operator  #36 ---------
// let numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Array contains the following information: ", ...numbers);

// let maximum = Math.max(...numbers);
// console.log("The biggest number is:",maximum);

// let class1 = ["Bob", "Ron", "Peter"];
// let class2 = ["Angel", "Lancia", "Albert"];

// class1.push(...class2);
// console.log(class1);

// --------- rest parameters  #37 ---------
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a,b,c,d,e));

// function sum(...numbers){
//         let total = 0;
//         for(let number of numbers){
//                 total += number;
//         }
//         return total;
// }

// --------- callbacks  #38 ---------
// let total = sum(2,3, displayDOM);
// // displayConsole(total);
// // displayDOM(total);

// function sum(x, y, callback){
//         let result = x + y;
//         callback(result);
// }

// function displayConsole(output){
//         console.log(output);
// }

// function displayDOM(output){
//         document.getElementById("myLabel").innerHTML = output;
// }

// --------- array forEach()  #39 ---------
// let students = ["bob", "ron", "peter", "angel", "lancia", "albert"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//         array[index] = element[0].toUpperCase() + element.substring(1);
// }
// function print(element){
// console.log(element);
// }
// console.log(students[0]);

// --------- array map()  #40 ---------
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// cubes.forEach(print);
// squares.forEach(print);

// function square(element){
//         return Math.pow(element, 2);
// }

// function cube(element){
//         return Math.pow(element, 3);
// }

// function print(element){
//         console.log(element);
// }

// --------- array filter()  #41 ---------
// let ages = [18, 16, 21, 17, 19, 90];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){
//         return element >= 18;
// }

// function printElement(element){
//         console.log(element);
// }

// --------- array reduce()  #42 ---------
// let prices = [5, 10, 15, 20, 25];
// let total = prices.reduce(chechOut);

// console.log(`The total is: $${total}`);

// function chechOut(total, element){
//         return total + element;
// }

// --------- sort an array of numbers #43 ---------
// let grades = [6, 5, 2, 3, 4];

// grades = grades.sort(ascendingSort);
// grades.forEach(print)

// function descendingSort(x, y){
//         return y - x;
// }

// function ascendingSort(x, y){
//         return x - y;
// }

// function print(element){
//         console.log(element);
// }

// --------- function expressions #44 ---------
// anonymous fucntion
// const greeting =  function(){
//         console.log("Hello! :)");
// }
// greeting();

// let count = 0;
// document.getElementById("increaseButton").onclick = function(){
//         count++;
//         document.getElementById("myLabel").innerHTML = count;
// }

// document.getElementById("decreaseButton").onclick = function(){
//         count--;
//         document.getElementById("myLabel").innerHTML = count;
// }

// --------- arrow functions #45 ---------
const greeting = (username)=>{
        console.log("Hello! :)", username);
}
greeting("Peter"); 

const percent = (x, y) =>{
        return x / y * 100;
}
console.log(percent(2224, 2340),"%");

// --------- shuffle an array #46 ---------


// --------- To be Continued ---------
// 2:20:00 reached
// TODO: rewatch and practice 



