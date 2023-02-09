// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

// Log the message 
const myObj = { message: "Hello, earthling! I bring peace." };

printExerciseSolutuionHere(1,"Objects");

//This is the solution --->
console.log(myObj.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age.
printExerciseSolutuionHere(2,"Objects");

//This is the solution --->
const myDataObj= {myName: "Loghin Petru Madalin", myAge : "23"};

const myDataMessage = "My name is " + myDataObj.myName + " and I am " + myDataObj.myAge + " years old.";
console.log(myDataMessage);

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true
printExerciseSolutuionHere(3,"Objects");

//This is the solution --->
stackOverflow.isAllowed = true;
console.log(stackOverflow.isAllowed)

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
printExerciseSolutuionHere(4,"Objects");

//This is the solution --->
delete thisSong.description;
thisSong.about = "Just a tribute.";
console.log(thisSong.about);
// --------------------------------------


