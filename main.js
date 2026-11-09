// ============================================================
// WEEK 04: JAVASCRIPT FUNDAMENTALS
// Student: Joseph Kinyanjui
// Repository: iyf-s12-week-04-Quantums-meruit
//
// This project covers:
// - Variables and data types
// - Operators and expressions
// - Functions
// - Conditional statements
// - Loops
// - Arrays and array methods
// - Objects
// - Arrays of objects
// - JSON
// - Calculator mini-project
// - Student Grade Tracker mini-project
// - Five daily coding challenges
// ============================================================

// ============================================================
// LESSON 7 — JAVASCRIPT BASICS
// ============================================================

// ------------------------------------------------------------
// TASK 7.1: VARIABLES AND DATA TYPES
// ------------------------------------------------------------

console.log("\n========== TASK 7.1: VARIABLES ==========");

// WHAT: A string stores text.
// WHY: Strings are used for names, messages and other text data.
const myName = "Joseph Kinyanjui";

// WHAT: A number stores numerical values.
const myAge = 23;

// WHAT: A boolean stores either true or false.
// WHY: Booleans are useful when representing yes/no conditions.
const amIStudent = true;

// WHAT: An array stores multiple values in one variable.
// NB: Arrays can contain multiple values and are accessed by index.
// Array indexes start at 0, not 1.
const myFavoriteColors = ["blue", "green", "black"];

// WHAT: new Date() creates an object representing the current date and time.
const today = new Date();

// Displaying our variables
console.log("My name:", myName);
console.log("My age:", myAge);
console.log("Am I a student?", amIStudent);
console.log("My favorite colors:", myFavoriteColors);
console.log("Today's date:", today);

// WHAT: typeof tells us the data type of a value.
// NB: JavaScript reports arrays as "object" when using typeof.
console.log("Name data type:", typeof myName);
console.log("Age data type:", typeof myAge);
console.log("Student status data type:", typeof amIStudent);
console.log("Colors data type:", typeof myFavoriteColors);
console.log("Date data type:", typeof today);

// WHAT: let allows a variable to be reassigned.
// WHY: Use let when you expect the value to change.
let score = 100;

console.log("Original score:", score);

score = 150;

console.log("Updated score:", score);

// WHAT: const prevents a variable from being reassigned.
// NB: const does not mean that every object or array stored
// in the variable is completely immutable.
const PI = 3.14159;

console.log("Value of PI:", PI);

// ------------------------------------------------------------
// TASK 7.2: DATA TYPES AND OPERATORS
// ------------------------------------------------------------

console.log("\n========== TASK 7.2: OPERATORS ==========");

// EXERCISE 1: NUMBER OPERATIONS

const numberA = 10;
const numberB = 3;

// Arithmetic operators perform mathematical calculations.
console.log("Addition:", numberA + numberB);
console.log("Subtraction:", numberA - numberB);
console.log("Multiplication:", numberA * numberB);
console.log("Division:", numberA / numberB);

// NB: The modulus operator (%) returns the remainder after division.
console.log("Modulus:", numberA % numberB);

// The exponentiation operator (**) raises a number to a power.
console.log("Exponentiation:", numberA ** numberB);

// Increment and decrement operators
let count = 0;

// WHAT: ++ increases the value by one.
count++;

console.log("After increment:", count);

// WHAT: -- decreases the value by one.
count--;

console.log("After decrement:", count);

// EXERCISE 2: STRING OPERATIONS

const firstName = "Joseph";
const lastName = "Kinyanjui";

// String concatenation joins strings together.
const fullName = firstName + " " + lastName;

// WHAT: Template literals allow us to insert variables into strings.
// NB: Template literals use backticks (`), not quotation marks.
const greetingMessage = `Hello, ${firstName}!`;

const nameLengthMessage = `${firstName} has ${firstName.length} letters.`;

console.log("Full name:", fullName);
console.log("Greeting:", greetingMessage);
console.log("Name length:", nameLengthMessage);

// Common string methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First character:", firstName.charAt(0));
console.log("Contains Joseph:", fullName.includes("Joseph"));

// EXERCISE 3: COMPARISON OPERATORS

// Comparison operators return a boolean: true or false.
console.log("Is 5 greater than 3?", 5 > 3);
console.log("Is 5 less than 3?", 5 < 3);
console.log("Is 5 strictly equal to 5?", 5 === 5);
console.log("Is 5 loosely equal to '5'?", 5 == "5");
console.log("Is 5 not equal to 3?", 5 !== 3);

// Logical operators combine or reverse conditions.

// && means AND: both conditions must be true.
console.log("AND:", true && true);

// || means OR: at least one condition must be true.
console.log("OR:", true || false);

// ! means NOT: reverses a boolean value.
console.log("NOT:", !true);

// AGE CALCULATION CHALLENGE

const birthYear = 2003;
const currentYear = new Date().getFullYear();

// WHAT: Subtract the birth year from the current year.
// NB: This is an estimate because we have not checked whether
// the birthday has already occurred this year.
const estimatedAge = currentYear - birthYear;

const ageInDays = estimatedAge * 365;
const ageInHours = ageInDays * 24;

const yearTurning100 = birthYear + 100;

console.log("Estimated age:", estimatedAge, "years");
console.log("Approximate age in days:", ageInDays);
console.log("Approximate age in hours:", ageInHours);
console.log("Year I will turn 100:", yearTurning100);

// ------------------------------------------------------------
// TASK 7.3: FUNCTIONS
// ------------------------------------------------------------

console.log("\n========== TASK 7.3: FUNCTIONS ==========");

// EXERCISE 1: DIFFERENT WAYS TO CREATE FUNCTIONS

// 1. Function declaration

// WHAT: A function declaration defines a reusable block of code.
// WHY: We can call this function whenever we need a greeting.
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Joseph"));

// 2. Function expression

// WHAT: A function is stored inside a variable.
// NB: This function expression is not available before its
// declaration in the same way a function declaration is.
const add = function (a, b) {
  return a + b;
};

console.log("Addition function:", add(8, 4));

// 3. Arrow function

// WHAT: Arrow functions provide a shorter way to write functions.
// NB: When there is only one expression, the return is implicit.
const multiply = (a, b) => a * b;

console.log("Multiplication function:", multiply(8, 4));

// Arrow function with multiple statements
const divide = (a, b) => {
  // Prevent division by zero.
  if (b === 0) {
    return "Cannot divide by zero";
  }

  return a / b;
};

console.log("Division function:", divide(20, 4));
console.log("Division by zero test:", divide(20, 0));

// EXERCISE 2: BUILD REUSABLE FUNCTIONS

// Calculate the area of a rectangle.
// Formula: width multiplied by height.
function calculateArea(width, height) {
  return width * height;
}

// Convert Celsius to Fahrenheit.
// Formula: (Celsius × 9/5) + 32.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Check whether a number is even.
// NB: An even number has a remainder of 0 when divided by 2.
function isEven(number) {
  return number % 2 === 0;
}

// Extract the first letter of every name.
// trim() removes surrounding whitespace.
// split() separates the name into individual words.
// map() transforms each word into its first letter.
// join() combines the letters into one string.
function getInitials(fullName) {
  const nameParts = fullName.trim().split(/\s+/);

  return nameParts.map((part) => part.charAt(0).toUpperCase()).join("");
}

// Reverse a string using array methods.
// split("") separates characters.
// reverse() reverses their order.
// join("") combines them again.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Rectangle area:", calculateArea(10, 5));
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is 12 even?", isEven(12));
console.log("Is 7 even?", isEven(7));
console.log("Initials:", getInitials("Joseph Kinyanjui"));
console.log("Reversed string:", reverseString("JavaScript"));

// EXERCISE 3: DEFAULT PARAMETERS

// WHAT: Default parameters provide fallback values.
// WHY: The function can still work when an argument is omitted.
function greetWithDefault(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Joseph"));
console.log(greetWithDefault("Joseph", "Welcome"));

// BUILD: TIP CALCULATOR

// Calculate a tip using a default percentage of 15%.
// If another percentage is supplied, that value is used instead.
function calculateTip(bill, tipPercent = 15) {
  return bill * (tipPercent / 100);
}

console.log("Tip at 15%:", calculateTip(2000));
console.log("Tip at 20%:", calculateTip(2000, 20));

// ------------------------------------------------------------
// TASK 7.4: CONTROL FLOW
// ------------------------------------------------------------

console.log("\n========== TASK 7.4: CONTROL FLOW ==========");

// EXERCISE 1: IF / ELSE IF / ELSE

// WHAT: Conditional statements allow a program to make decisions.
// WHY: We can return different grades depending on a score.
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Grade for 95:", getGrade(95));
console.log("Grade for 83:", getGrade(83));
console.log("Grade for 72:", getGrade(72));
console.log("Grade for 65:", getGrade(65));
console.log("Grade for 45:", getGrade(45));

// EXERCISE 2: SWITCH STATEMENTS

// WHAT: switch compares a value against different cases.
// WHY: It is useful when checking one value against several
// possible exact matches.
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    default:
      return "Invalid day";
  }
}

console.log("Day 1:", getDayName(1));
console.log("Day 5:", getDayName(5));
console.log("Day 8:", getDayName(8));

// EXERCISE 3: LOOPS

// FOR LOOP
// WHAT: A for loop repeats code while its condition is true.
// Structure:
// 1. Initialization
// 2. Condition
// 3. Update
console.log("For loop:");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// WHILE LOOP
// WHAT: A while loop repeats as long as its condition is true.
// NB: Remember to update the counter to avoid an infinite loop.
console.log("While loop:");

let whileCount = 0;

while (whileCount < 5) {
  console.log(whileCount);
  whileCount++;
}

// FOR...OF LOOP
// WHAT: for...of loops through the values of an iterable,
// such as an array.
console.log("For...of loop:");

const loopColors = ["red", "green", "blue"];

for (const color of loopColors) {
  console.log(color);
}

// BUILD 1: PRINT NUMBERS FROM 1 TO 100

console.log("Numbers from 1 to 100:");

for (let number = 1; number <= 100; number++) {
  console.log(number);
}

// BUILD 2: PRINT EVEN NUMBERS FROM 1 TO 50

console.log("Even numbers from 1 to 50:");

for (let number = 1; number <= 50; number++) {
  // The modulus operator checks whether the remainder is zero.
  if (number % 2 === 0) {
    console.log(number);
  }
}

// BUILD 3: FIZZBUZZ

console.log("FizzBuzz from 1 to 100:");

for (let number = 1; number <= 100; number++) {
  // NB: Check the combined condition FIRST.
  // A number divisible by both 3 and 5 must produce FizzBuzz.
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    // Print the number when none of the conditions match.
    console.log(number);
  }
}

// BUILD 4: TRIANGLE OF STARS

console.log("Triangle of stars:");

// WHAT: repeat() creates a string containing the specified
// number of repetitions.
// WHY: Each new row contains one additional star.
for (let row = 1; row <= 5; row++) {
  console.log("*".repeat(row));
}

// ------------------------------------------------------------
// MINI-PROJECT: CALCULATOR
// ------------------------------------------------------------

console.log("\n========== CALCULATOR PROJECT ==========");

// Individual mathematical operations

function subtract(a, b) {
  return a - b;
}

function calculatorMultiply(a, b) {
  return a * b;
}

function calculatorDivide(a, b) {
  // NB: Division by zero is not allowed in this calculator.
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }

  return a / b;
}

// Main calculator function.
// WHAT: It receives two numbers and an operator.
// WHY: A switch statement selects which calculation to perform.
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "*":
      return calculatorMultiply(num1, num2);

    case "/":
      return calculatorDivide(num1, num2);

    case "%":
      if (num2 === 0) {
        return "Error: Cannot calculate modulus by zero";
      }

      return num1 % num2;

    case "**":
      return num1 ** num2;

    default:
      return "Invalid operator";
  }
}

// Testing the calculator
console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 / 0 =", calculate(10, "/", 0));
console.log("10 % 3 =", calculate(10, "%", 3));
console.log("2 ** 3 =", calculate(2, "**", 3));
console.log("Invalid operator:", calculate(10, "x", 5));

// ============================================================
// LESSON 8 — ARRAYS, OBJECTS AND DATA MANIPULATION
// ============================================================

// ------------------------------------------------------------
// TASK 8.1: ARRAYS
// ------------------------------------------------------------

console.log("\n========== TASK 8.1: ARRAYS ==========");

// EXERCISE 1: ARRAY BASICS

// WHAT: Arrays store multiple values in a single variable.
// NB: Array positions are called indexes and start at zero.
const fruits = ["apple", "banana", "orange"];

const numbers = [1, 2, 3, 4, 5];

const mixed = ["hello", 42, true, null];

console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);
console.log("Mixed array:", mixed);

// MODIFYING ARRAYS

// push() adds an item to the END.
fruits.push("grape");

console.log("After push:", fruits);

// unshift() adds an item to the BEGINNING.
fruits.unshift("mango");

console.log("After unshift:", fruits);

// pop() removes the LAST item.
fruits.pop();

console.log("After pop:", fruits);

// shift() removes the FIRST item.
fruits.shift();

console.log("After shift:", fruits);

// EXERCISE 2: ARRAY METHODS

// forEach()
// WHAT: Runs a callback function for each array item.
// NB: forEach() does not return a new transformed array.
console.log("forEach — doubled numbers:");

numbers.forEach((number) => {
  console.log(number * 2);
});

// map()
// WHAT: Creates a new array by transforming every item.
// WHY: Useful when we need a modified version of existing data.
const doubledNumbers = numbers.map((number) => number * 2);

console.log("map — doubled array:", doubledNumbers);

// filter()
// WHAT: Creates a new array containing only items
// that satisfy a condition.
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("filter — even numbers:", evenNumbers);

// find()
// WHAT: Returns the FIRST item that satisfies a condition.
// NB: It returns undefined when no matching item exists.
const firstEvenNumber = numbers.find((number) => number % 2 === 0);

console.log("find — first even number:", firstEvenNumber);

// reduce()
// WHAT: Reduces an array to one accumulated value.
// Here, the accumulator keeps adding each number.
const totalSum = numbers.reduce((total, number) => {
  return total + number;
}, 0);

console.log("reduce — sum:", totalSum);

// includes()
// WHAT: Checks whether an array contains a specific value.
// It returns true or false.
console.log("includes — contains 3:", numbers.includes(3));

// FOUR REQUIRED ARRAY-METHOD CHALLENGES

const practiceNumbers = [-5, 2, 8, -1, 12, 4, 15];

// CHALLENGE 1: DOUBLE ALL NUMBERS

// map() transforms each number and returns a new array.
const allNumbersDoubled = practiceNumbers.map((number) => number * 2);

console.log("All numbers doubled:", allNumbersDoubled);

// CHALLENGE 2: FILTER OUT NEGATIVE NUMBERS

// filter() keeps only numbers greater than or equal to zero.
const nonNegativeNumbers = practiceNumbers.filter((number) => number >= 0);

console.log("Numbers without negatives:", nonNegativeNumbers);

// CHALLENGE 3: FIND THE FIRST NUMBER GREATER THAN 10

// find() stops after finding the first matching number.
const firstNumberAboveTen = practiceNumbers.find((number) => number > 10);

console.log("First number greater than 10:", firstNumberAboveTen);

// CHALLENGE 4: CALCULATE THE PRODUCT OF ALL NUMBERS

// WHAT: Multiplication is performed repeatedly.
// WHY: reduce() allows us to accumulate one final product.
//
// NB: The initial value is 1, not 0.
// Multiplying by zero would make the final product zero.
const productOfNumbers = practiceNumbers.reduce((product, number) => {
  return product * number;
}, 1);

console.log("Product of all numbers:", productOfNumbers);

// ------------------------------------------------------------
// TASK 8.2: OBJECTS
// ------------------------------------------------------------

console.log("\n========== TASK 8.2: OBJECTS ==========");

// EXERCISE 1: OBJECT BASICS

// WHAT: An object stores information using key-value pairs.
// WHY: Objects are useful for representing real-world entities.
const person = {
  firstName: "Joseph",
  lastName: "Kinyanjui",
  age: 23,
  isStudent: true,
  hobbies: ["coding", "learning", "technology"],

  // An object can contain another object.
  // This is called a nested object.
  address: {
    city: "Nairobi",
    country: "Kenya",
  },
};

// ACCESSING OBJECT PROPERTIES

// Dot notation
console.log("First name:", person.firstName);

// Bracket notation
console.log("Last name:", person["lastName"]);

// Accessing a nested property
console.log("City:", person.address.city);

// MODIFYING AN OBJECT PROPERTY

person.age = 24;

console.log("Updated age:", person.age);

// ADDING A NEW PROPERTY

person.phone = null;

console.log("Added phone property:", person.phone);

// REMOVING A PROPERTY

delete person.isStudent;

console.log("Person after deleting student status:", person);

// EXERCISE 2: OBJECT METHODS

// WHAT: A method is a function stored as an object property.
// WHY: Methods allow objects to perform actions using their data.
const objectCalculator = {
  add: function (a, b) {
    return a + b;
  },

  // ES6 method shorthand
  subtract(a, b) {
    return a - b;
  },

  // Arrow function stored as an object property
  multiply: (a, b) => a * b,
};

console.log("Object calculator addition:", objectCalculator.add(5, 3));
console.log("Object calculator subtraction:", objectCalculator.subtract(5, 3));
console.log(
  "Object calculator multiplication:",
  objectCalculator.multiply(5, 3),
);

// EXERCISE 3: OBJECT ITERATION

const scores = {
  math: 95,
  english: 88,
  science: 92,
};

// Object.keys() returns an array of property names.
console.log("Object keys:", Object.keys(scores));

// Object.values() returns an array of property values.
console.log("Object values:", Object.values(scores));

// Object.entries() returns arrays containing key-value pairs.
console.log("Object entries:", Object.entries(scores));

// Looping through both the subject and its score.
// Destructuring allows us to extract both values.
for (const [subject, subjectScore] of Object.entries(scores)) {
  console.log(`${subject}: ${subjectScore}`);
}

// ------------------------------------------------------------
// TASK 8.3: ARRAYS OF OBJECTS
// ------------------------------------------------------------

console.log("\n========== TASK 8.3: ARRAYS OF OBJECTS ==========");

// WHAT: An array of objects stores multiple records.
// WHY: This structure is useful for managing collections
// of people, products, students, orders and other records.
//
// These are original sample records for this assignment.

const studentRecords = [
  {
    name: "Joseph",
    age: 23,
    grade: 85,
    major: "Computer Science",
  },
  {
    name: "Miriam",
    age: 20,
    grade: 72,
    major: "Mathematics",
  },
  {
    name: "Brian",
    age: 23,
    grade: 90,
    major: "Computer Science",
  },
  {
    name: "Achieng",
    age: 21,
    grade: 88,
    major: "Physics",
  },
  {
    name: "Kamau",
    age: 22,
    grade: 95,
    major: "Computer Science",
  },
];

// CHALLENGE 1: GET ALL STUDENT NAMES

// map() extracts one property from each student object.
const studentNames = studentRecords.map((student) => student.name);

console.log("All student names:", studentNames);

// CHALLENGE 2: GET STUDENTS WITH A GRADE ABOVE 80

// filter() returns all students whose grade is greater than 80.
const highAchievers = studentRecords.filter((student) => student.grade > 80);

console.log("Students with grades above 80:", highAchievers);

// CHALLENGE 3: FIND A STUDENT BY NAME

// find() returns the first student whose name matches.
const selectedStudent = studentRecords.find(
  (student) => student.name === "Miriam",
);

console.log("Student named Miriam:", selectedStudent);

// CHALLENGE 4: CALCULATE THE AVERAGE GRADE

// reduce() adds all student grades together.
// We then divide the total by the number of students.
const averageGrade =
  studentRecords.reduce((total, student) => {
    return total + student.grade;
  }, 0) / studentRecords.length;

console.log("Average student grade:", averageGrade);

// CHALLENGE 5: GET COMPUTER SCIENCE MAJORS

// filter() checks the major property of each student.
const computerScienceStudents = studentRecords.filter(
  (student) => student.major === "Computer Science",
);

console.log("Computer Science students:", computerScienceStudents);

// CHALLENGE 6: SORT STUDENTS BY GRADE

// sort() compares two students at a time.
// A descending comparison places the highest grade first.
//
// NB: sort() modifies the original array.
// Spread syntax (...) creates a shallow copy first.
const studentsSortedByGrade = [...studentRecords].sort(
  (studentA, studentB) => studentB.grade - studentA.grade,
);

console.log("Students sorted by grade:", studentsSortedByGrade);

// CHALLENGE 7: CHECK IF ANY STUDENT HAS A GRADE ABOVE 90

// some() returns true if AT LEAST ONE item satisfies the condition.
const hasTopStudent = studentRecords.some((student) => student.grade > 90);

console.log("Is there a student above 90?", hasTopStudent);

// CHALLENGE 8: CHECK IF ALL STUDENTS ARE PASSING

// every() returns true only when ALL items satisfy the condition.
const allStudentsPassing = studentRecords.every(
  (student) => student.grade >= 60,
);

console.log("Are all students passing?", allStudentsPassing);

// ------------------------------------------------------------
// TASK 8.4: JSON — DATA AS TEXT
// ------------------------------------------------------------

console.log("\n========== TASK 8.4: JSON ==========");

// WHAT: JSON stands for JavaScript Object Notation.
// WHY: It is a common format for storing and exchanging data.
//
// JSON data is text, even when it represents an object.

const studentJson = '{"name":"Joseph","grades":{"math":88,"english":92}}';

// JSON.parse()
// WHAT: Converts JSON text into a JavaScript value.
// NB: JSON.parse() can throw an error if the text is invalid.
const parsedStudent = JSON.parse(studentJson);

console.log("Parsed student:", parsedStudent);
console.log("Math grade:", parsedStudent.grades.math);

// JSON.stringify()
// WHAT: Converts a JavaScript value into JSON text.
// The second argument controls filtering; null means no filtering.
// The third argument adds indentation for readability.
const studentBackToJson = JSON.stringify(parsedStudent, null, 2);

console.log("JSON text:", studentBackToJson);
console.log("JSON data type:", typeof studentBackToJson);

// REQUIRED POSTS EXERCISE

const postsJson = `[
    {
        "id": 1,
        "title": "Welcome",
        "likes": 12,
        "published": true
    },
    {
        "id": 2,
        "title": "Draft ideas",
        "likes": 0,
        "published": false
    },
    {
        "id": 3,
        "title": "Week 4 recap",
        "likes": 30,
        "published": true
    }
]`;

try {
  // STEP 1: Parse the JSON text into a JavaScript array.
  const posts = JSON.parse(postsJson);

  // STEP 2: Keep only posts that have been published.
  const publishedPosts = posts.filter((post) => post.published === true);

  // STEP 3: Sort published posts by likes, highest first.
  // A copied array prevents sort() from changing publishedPosts.
  const sortedPublishedPosts = [...publishedPosts].sort(
    (postA, postB) => postB.likes - postA.likes,
  );

  // STEP 4: Create a formatted string for each published post.
  const formattedPosts = sortedPublishedPosts.map(
    (post) => `${post.title} (${post.likes} likes)`,
  );

  console.log("Published posts:", publishedPosts);
  console.log("Sorted published posts:", sortedPublishedPosts);
  console.log("Formatted posts:", formattedPosts);

  // STEP 5: Convert the sorted published posts back into JSON text.
  const publishedPostsJson = JSON.stringify(sortedPublishedPosts, null, 2);

  console.log("Published posts as JSON:", publishedPostsJson);
} catch (error) {
  // WHAT: catch() handles an error thrown inside the try block.
  // WHY: Invalid JSON should not crash the rest of our program.
  console.error("There was a problem parsing the posts JSON:", error.message);
}

// ------------------------------------------------------------
// MINI-PROJECT: STUDENT GRADE TRACKER
// ------------------------------------------------------------

console.log("\n========== STUDENT GRADE TRACKER ==========");

// WHAT: This object manages students and their subject grades.
// WHY: Keeping related operations inside one object makes
// the grade tracker easier to organise and maintain.
//
// NB: The methods use this to refer to the gradeTracker object.

const gradeTracker = {
  // This array stores all student records.
  students: [],

  // METHOD 1: ADD A STUDENT

  addStudent(name, grades) {
    // Check that a valid name has been supplied.
    if (!name || typeof name !== "string") {
      return "Please provide a valid student name.";
    }

    // Check that grades are supplied as an object.
    if (!grades || typeof grades !== "object" || Array.isArray(grades)) {
      return "Please provide grades as an object.";
    }

    const gradeValues = Object.values(grades);

    // A student must have at least one subject grade.
    if (gradeValues.length === 0) {
      return "A student must have at least one grade.";
    }

    // Check that every grade is a number between 0 and 100.
    const gradesAreValid = gradeValues.every(
      (grade) => typeof grade === "number" && grade >= 0 && grade <= 100,
    );

    if (!gradesAreValid) {
      return "Grades must be numbers between 0 and 100.";
    }

    // Prevent adding the same student name twice.
    const studentAlreadyExists = this.getStudent(name);

    if (studentAlreadyExists) {
      return "A student with this name already exists.";
    }

    // Create a new student object.
    // Spread syntax makes a shallow copy of the grades object.
    const newStudent = {
      name: name,
      grades: { ...grades },
    };

    // Store the new student in the students array.
    this.students.push(newStudent);

    return newStudent;
  },

  // METHOD 2: FIND A STUDENT

  getStudent(name) {
    // find() searches for the first matching student.
    // toLowerCase() makes the name search case-insensitive.
    const student = this.students.find(
      (student) => student.name.toLowerCase() === name.toLowerCase(),
    );

    // Return null if no matching student exists.
    return student || null;
  },

  // METHOD 3: CALCULATE A STUDENT'S AVERAGE

  getStudentAverage(name) {
    const student = this.getStudent(name);

    // Return null if the student cannot be found.
    if (!student) {
      return null;
    }

    const grades = Object.values(student.grades);

    // Add all grades together.
    const total = grades.reduce((sum, grade) => sum + grade, 0);

    // Divide by the number of subjects.
    // toFixed(2) keeps two decimal places.
    // Number() converts the result back from a string to a number.
    return Number((total / grades.length).toFixed(2));
  },

  // METHOD 4: CALCULATE A SUBJECT'S CLASS AVERAGE

  getSubjectAverage(subject) {
    // Find students who have a grade for this subject.
    const studentsWithSubject = this.students.filter((student) => {
      return Object.prototype.hasOwnProperty.call(student.grades, subject);
    });

    // There is no average if nobody has a grade for this subject.
    if (studentsWithSubject.length === 0) {
      return null;
    }

    // Add the subject grades together.
    const total = studentsWithSubject.reduce((sum, student) => {
      return sum + student.grades[subject];
    }, 0);

    // Divide by the number of students who have this subject.
    return Number((total / studentsWithSubject.length).toFixed(2));
  },

  // METHOD 5: FIND THE TOP STUDENT

  getTopStudent() {
    // If the tracker is empty, there is no top student.
    if (this.students.length === 0) {
      return null;
    }

    // Initially assume the first student has the highest average.
    let topStudent = this.students[0];

    // Compare every student with the current top student.
    for (const student of this.students) {
      const currentAverage = this.getStudentAverage(student.name);
      const topAverage = this.getStudentAverage(topStudent.name);

      if (currentAverage > topAverage) {
        topStudent = student;
      }
    }

    return topStudent;
  },

  // METHOD 6: FIND STUDENTS WHO ARE STRUGGLING

  getStrugglingStudents() {
    // Return students whose overall average is below 70.
    return this.students.filter((student) => {
      return this.getStudentAverage(student.name) < 70;
    });
  },

  // METHOD 7: CONVERT A SCORE INTO A LETTER GRADE

  getLetterGrade(score) {
    // Reject invalid scores.
    if (typeof score !== "number" || score < 0 || score > 100) {
      return "Invalid score";
    }

    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  },

  // METHOD 8: GENERATE A REPORT CARD

  generateReportCard(name) {
    const student = this.getStudent(name);

    // Handle a student who does not exist.
    if (!student) {
      return "Student not found.";
    }

    const average = this.getStudentAverage(name);

    // Start building the report as a string.
    let report = `REPORT CARD\n`;

    report += `Student: ${student.name}\n`;
    report += `--------------------------\n`;

    // Object.entries() gives us each subject and its score.
    for (const [subject, score] of Object.entries(student.grades)) {
      // Display the numerical score and its letter grade.
      report += `${subject}: ${score} (${this.getLetterGrade(score)})\n`;
    }

    report += `--------------------------\n`;
    report += `Average: ${average}\n`;
    report += `Overall grade: ${this.getLetterGrade(average)}`;

    return report;
  },
};

// ADD SAMPLE STUDENTS

// Each student has a name and an object containing subject grades.

gradeTracker.addStudent("Joseph", {
  math: 95,
  english: 88,
  science: 92,
});

gradeTracker.addStudent("Miriam", {
  math: 72,
  english: 85,
  science: 78,
});

gradeTracker.addStudent("Brian", {
  math: 60,
  english: 65,
  science: 58,
});

// TEST THE GRADE TRACKER

console.log("Joseph's average:", gradeTracker.getStudentAverage("Joseph"));

console.log("Math class average:", gradeTracker.getSubjectAverage("math"));

const topStudent = gradeTracker.getTopStudent();

console.log("Top student:", topStudent ? topStudent.name : "No students found");

console.log("Students needing help:", gradeTracker.getStrugglingStudents());

console.log("Letter grade for 95:", gradeTracker.getLetterGrade(95));
console.log("Letter grade for 75:", gradeTracker.getLetterGrade(75));

console.log("Joseph's report card:");
console.log(gradeTracker.generateReportCard("Joseph"));

// Test searching for a student who does not exist.
console.log("Missing student:", gradeTracker.getStudent("Unknown"));

// ============================================================
// DAILY CHALLENGES
// ============================================================

// ------------------------------------------------------------
// DAY 1: FIZZBUZZ
// ------------------------------------------------------------

console.log("\n========== DAY 1: FIZZBUZZ ==========");

// WHAT: This function prints numbers from 1 to 100.
// WHY: It practises loops, modulus and conditional statements.
function runFizzBuzz() {
  for (let number = 1; number <= 100; number++) {
    // Check both conditions first.
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }
}

runFizzBuzz();

// ------------------------------------------------------------
// DAY 2: REVERSE A STRING
// ------------------------------------------------------------

console.log("\n========== DAY 2: REVERSE A STRING ==========");

// APPROACH 1: USING A LOOP

function reverseStringWithLoop(str) {
  // Start with an empty string.
  let reversed = "";

  // Start at the last character and move backwards.
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character to the new string.
    reversed += str[i];
  }

  return reversed;
}

// APPROACH 2: USING BUILT-IN ARRAY METHODS

function reverseStringWithMethods(str) {
  // split("") separates characters into an array.
  // reverse() changes the order of array elements.
  // join("") combines the characters into a string.
  return str.split("").reverse().join("");
}

console.log("Loop approach:", reverseStringWithLoop("hello"));

console.log("Built-in approach:", reverseStringWithMethods("JavaScript"));

// ------------------------------------------------------------
// DAY 3: FIND THE LARGEST NUMBER
// ------------------------------------------------------------

console.log("\n========== DAY 3: LARGEST NUMBER ==========");

// APPROACH 1: USING A LOOP

function findLargestWithLoop(numbers) {
  // Handle an empty array.
  if (numbers.length === 0) {
    return null;
  }

  // Initially assume the first number is the largest.
  let largest = numbers[0];

  // Compare every number with the current largest.
  for (const number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }

  return largest;
}

// APPROACH 2: USING REDUCE

function findLargestWithReduce(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  // reduce() compares the current number with the largest
  // value found so far.
  return numbers.reduce((largest, number) => {
    return number > largest ? number : largest;
  }, numbers[0]);
}

const largestNumberTest = [12, 45, 7, 89, 23, 56];

console.log("Largest using loop:", findLargestWithLoop(largestNumberTest));

console.log("Largest using reduce:", findLargestWithReduce(largestNumberTest));

// ------------------------------------------------------------
// DAY 4: REMOVE DUPLICATES
// ------------------------------------------------------------

console.log("\n========== DAY 4: REMOVE DUPLICATES ==========");

// APPROACH 1: USING SET

function removeDuplicatesWithSet(numbers) {
  // A Set stores unique values.
  // The spread operator converts the Set back into an array.
  return [...new Set(numbers)];
}

// APPROACH 2: USING FILTER

function removeDuplicatesWithFilter(numbers) {
  // indexOf() returns the first position of a value.
  // Keep the value only when its current index is that first position.
  return numbers.filter((number, index) => {
    return numbers.indexOf(number) === index;
  });
}

const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

console.log("Using Set:", removeDuplicatesWithSet(duplicateNumbers));

console.log("Using filter:", removeDuplicatesWithFilter(duplicateNumbers));

// ------------------------------------------------------------
// DAY 5: PALINDROME CHECKER
// ------------------------------------------------------------

console.log("\n========== DAY 5: PALINDROME CHECKER ==========");

// WHAT: A palindrome reads the same forwards and backwards.
// Examples: racecar, level, madam.
//
// WHY: We clean the input before comparing it so that spaces,
// punctuation and uppercase letters do not affect the result.

function isPalindrome(str) {
  // Convert the string to lowercase.
  // Remove all characters except letters and numbers.
  const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string.
  const reversedString = cleanedString.split("").reverse().join("");

  // A palindrome is equal to its reversed version.
  return cleanedString === reversedString;
}

console.log("racecar:", isPalindrome("racecar"));

console.log("hello:", isPalindrome("hello"));

console.log(
  "A man a plan a canal Panama:",
  isPalindrome("A man a plan a canal Panama"),
);

// ============================================================
// END OF WEEK 04
// ============================================================

console.log("\n========== WEEK 04 JAVASCRIPT PRACTICE COMPLETE ==========");


/**
JavaScript concept	NB — remember
const	Prevents reassignment, but doesn't freeze objects or arrays.
map()	Returns a new transformed array.
filter()	Returns a new array containing matching elements.
find()	Returns the first matching element, or undefined.
reduce()	Accumulates array values into one result.
sort()	Changes the original array. Copy it first if necessary.
JSON.parse()	Converts JSON text into JavaScript data.
JSON.stringify()	Converts JavaScript data into JSON text.
this	In our Grade Tracker methods, refers to the gradeTracker object.
*/