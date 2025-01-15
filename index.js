// 1.What will the following code output?
// let x = 5;
// while (x < 3) {
//     console.log(x);
//     x++;
// }       
//op: no output

// a) 5
// b) 3
// c) No output
// d) 5, 6, 7... (Infinite loop)

// 2. What will be the result of the following code?
// let y = 0;
// do {
//     console.log(y);
//     y++;
// } while (y < 2);
// op: 0,1
// a) 0
// b) 0, 1
// c) 1, 2
// d) No output
// 3. Which statement is true about the difference between while and do...while loops?
// a) while loops execute at least once, while do...while loops may not execute at all.
// b) do...while loops execute at least once, while while loops may not execute at all.
// c) Both while and do...while loops execute at least once.
// d) Neither loop guarantees execution of the code block.
//op: b
// 4. What will the following code print?
// let count = 5;
// do {
//     console.log(count);
//     count--;
// } while (count > 0);

// a) 5, 4, 3, 2, 1
// b) 5
// c) 4, 3, 2, 1
// d) No output
// op: a
// 5. Which of the following loops will execute the code block at least once, even if the condition is initially false?
// a) while loop
// b) do...while loop
// c) for loop
// d) for...in loop
// op: b
// 6. What will be the output of the following code?
// let z = 0;
// while (z < 3) {
//     console.log(z);
//     z++;
// }

// a) 1, 2, 3
// b) 0, 1, 2
// c) 0, 1, 2, 3
// d) No output
// op: b
// 7. What is the primary difference between the while loop and the do...while loop?
// a) The while loop checks the condition before the code block runs, while the do...while loop checks the condition after.
// b) The do...while loop runs only once, while the while loop runs indefinitely.
// c) The while loop checks the condition after the code block runs, while the do...while loop checks it before.
// d) There is no difference between the two loops.
// op: a
// 8. What will be the output of this code?
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     if (i === 3) break;
//     i++;
// }

// a) 0, 1, 2, 3, 4
// b) 0, 1, 2, 3
// c) 0, 1, 2
// d) Infinite loop
// op: b
// 9. Which of the following is the correct usage of a do...while loop?
// a) while (condition) { do { // code } }
// b) do { // code } while (condition);
// c) do while (condition) { // code }
// d) while (condition) do { // code };
// op: b
// 10. What will be the output of the following code?
// let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a < 0);

// a) 0
// b) 1
// c) No output
// d) Infinite loop
// op: a
// Write a code to below questions 

// Write a while and do while loop that prints the numbers from 1 to 5 in the console.
// let h = 0;
// while(h < 5){
// h++;
// console.log(h);
// }

// How would you exit a while loop if a specific condition is met (e.g., when the number equals 3), Write a example code?
// let i = 0;
// while (i < 5) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("loop has ended")

// Write a while and do while loop that prints numbers from 1 to 10, but skips printing the any number from 1 to 10 .
// let j = 1;
// while (j <= 10) {
//     if (j === 9) {
//         j++;
//         continue
//     }
//     console.log(j);
//     j++;   
// }
// let k = 1;
// do{
// if(k===5)
// {
//     k++;
//     continue;
// }
// console.log(k);
// k++
// }
// while(k<=10);
// Write a while loop that prints all even numbers from 0 to 20.

let l = 0;
while (l <= 20) {
    if (l % 2 === 0) {
        console.log(l);
    }
    l++;
}

let m=0;
do{
if(m%2===0){
console.log(m)
}
m++
}

while(m<=20)
// Write a code for below questions using Conditional Statements

// Write an if statement in JavaScript that checks if a number is greater than 10, and prints "Number is greater than 10" if true.
// var  num=prompt("Enter the number");
// if(num>10){
//     console.log("entered number is greater than 10")
// }
// else{
//     console.log("entered number is less than 10")
// }

// Write an if-else statement that checks if a number is even or odd, and prints "Even" if it's even, or "Odd" if it's odd.
var checkEvenOdd=prompt("Enter the number");

if(checkEvenOdd%2==0){
    console.log("entered number is even")
}
else{
    console.log("entered no is odd")
}
// Write an if-else if-else ladder that checks the value of a variable grade and prints:
// "A" for grades 90 and above,
// "B" for grades 80 to 89,
// "C" for grades 70 to 79,
// "F" for grades below 70.

let grade=prompt("Enter marks");
if(grade>=90) {
    console.log("Grade A")
}
else if (grade>=80) {
    console.log("Grade B")
}
else if (grade>=70) {
    console.log('Grade C')
}
else {
    console.log("Grade F")
}
// Write a nested if statement that checks if a number is positive and, if true, checks if it's even or odd.
let enterValue=prompt("enter the number to check if its even or odd");
if(enterValue%2==0 && enterValue>=0){
console.log("number is even")
}
else{
    console.log("number is odd")
}
// Rewrite the following code using if else statement :
//                 let age = 20;
//                  console.log(age >= 18 ? "Adult" : "Minor");
let age=20;
if(age>=18){
console.log("Adult")
}
else{
    console.log("Minor")
}
// Write an if statement that checks if a number is between 10 and 20 (inclusive). Print "In range" if true, otherwise print "Out of range".
let range=prompt("Enter thenumber to check b/w 10 to 20")
if(range>=10 && range <=20){
console.log("In Range")
}
else{
    console.log("out of range")
}
// What is the difference between == and === in an if statement in JavaScript? Provide an example where each would behave differently.
let str="veni";
let num="veni";
if(typeof(str)!==typeof(num)){
console.log("type is not same")
}
else if(typeof(str)===typeof(num)){
    console.log("type is same")
}
else{
    console.log("types are different")
}

// Write an if statement that checks if a number is between 10 and 20 or if it's exactly 30, and prints "Condition met" if true.

let checknum=prompt("Enter no b/w 10 to 20");
if(checknum>=10 && checknum<=20 && checknum==30){
    console.log("condition not met")
}
else{
    console.log("condition met")
}