// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
function printExerciseSolutuionHere (exerciseNumber, topic){
const topicOfTheEcercise = "Topic: "+ topic
const numberOfTheExercise = "Solution of the exercise " + exerciseNumber + " ---->";
console.log();
console.log();
console.log();
console.log(topicOfTheEcercise);
console.log(numberOfTheExercise);
}
console.log("Date of realisation : 09/02/2023");

// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
printExerciseSolutuionHere(1,"Basics");

//This is the solution --->
console.log("My first name is " + firstName + " and my last name is " + lastName);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// Add the year plus the number
// The result should be 2023
// You cannot touch line 1 or 2

printExerciseSolutuionHere(2,"Basics");


//This is the solution --->
const result = Number(year) + number;
console.log(result);

// --------------------------------------

