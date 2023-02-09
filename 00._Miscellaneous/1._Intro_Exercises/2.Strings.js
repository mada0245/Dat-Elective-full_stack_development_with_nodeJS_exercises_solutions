// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

printExerciseSolutuionHere(3,"Strings");
//This is the solution --->
const stringsResultOne = Number(numberOne) + Number(numberTwo);
console.log(stringsResultOne);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

printExerciseSolutuionHere(4,"Strings");

//This is the solution --->
const stringsResultTwo = Number(anotherNumberOne) + Number(anotherNumberTwo);
const resultWithTwoDecimals = stringsResultTwo.toFixed(2);
console.log(resultWithTwoDecimals);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

printExerciseSolutuionHere(5,"Strings");

//This is the solution --->
const average = (one + two + three) / 3;
const avarageWithFiveDecimals =average.toFixed(5);
console.log(avarageWithFiveDecimals);

// --------------------------------------
// Exercise 6 - Get the character by index

const stringLetters = "abc";
// Get me the character "c"

printExerciseSolutuionHere(6,"Strings");

//This is the solution --->
const char = stringLetters[2];
console.log(char);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

printExerciseSolutuionHere(7,"Strings");

//This is the solution --->
const factCapitalizedJ = fact.replace("j", "J");
console.log(factCapitalizedJ);

// --------------------------------------



