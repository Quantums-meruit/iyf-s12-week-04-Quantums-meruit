                        //*Task 7.1: JavaScript Setup & Variables

                        //*
                        // *Your name (string)
                        // *Your age (number)
                        //* Whether you're a student (boolean)
                        // *Your favorite colors (array - we'll learn more next lesson)
                        // *Today's date (use new Date())
                        //

                        // Variable declarations — use YOUR details
                        let names = "joseph";
                        let age = 23;
                        const birthYear = 2003;

                        // typeof operator
                        console.log(typeof names); // string
                        console.log(typeof age); // number
                        console.log(typeof true); // boolean

                        // let vs const
                        let score = 98;
                        score = 100; // Works!

                        const isStudent = true;
                        console.log(typeof isStudent);
                        let array = ["red", "green", "purple"]
                        console.log(`favourite colors are ${array[0]} and ${array[2]}`)

                        const PI = 22/7;
                        // PI = 3;  // Error! const cannot be reassigned


                        let today = new Date();
                        console.log(today);

                        //* Task 7.2: Data Types & Operators 🟢
                        //*Exercise 1: Number Operations
                        // Basic math
                        let basic = 10;
                        let data = 3;

                        console.log(basic + data); // Addition
                        console.log(basic - data); // Subtraction
                        console.log(basic * data); // Multiplication
                        console.log(basic / data); // Division
                        console.log(basic % data); // Modulus (remainder)
                        console.log(basic ** data); // Exponentiation

                        // Increment/Decrement
                        let start = 1;
                        start++; // start is now 2
                        start--; // start is now 1

                        //*Exercise 2: String Operations

                        let firstName = "Joseph";
                        let lastName = "Kinyanjui";

                        // Concatenation
                        let fullName = firstName + " " + lastName;

                        console.log(fullName); // Joseph Kinyanjui

                        // Template literals (preferred)
                        let greeting = `Hello, ${firstName}!`;
                        let message = `${firstName} has ${firstName.length} letters.`;
                        console.log(greeting + " " + message); // Hello, Joseph! Joseph has 6 letters.


                        // String methods
                        console.log(fullName.toUpperCase()); // JOSEPH KINYANJUI
                        console.log(fullName.toLowerCase());// joseph kinyanjui
                        console.log(firstName.charAt(0));// J
                        console.log(fullName.indexOf("Kinyanjui"));// 7
                        console.log(fullName.slice(0, 6));// Joseph
                        console.log(fullName.replace("Joseph", "Amina"));// Amina Kinyanjui
                        console.log(fullName.includes("Amina"));// false


                            //*Exercise 3: Comparison & Logical Operators

                                // Comparison
                        console.log(10 > 4 );    // true
                        console.log(10 < 3);    // false
                        console.log(10 === 10);  // true (strict equality)
                        console.log(10 == "10"); // true (loose equality - avoid!)
                        console.log(10 !== 4);  // true

                                // Logical
                        console.log(true && true);   // AND
                        console.log(true || false);  // OR
                        console.log(!true);          // NOT


                                //* Challenge: Calculate and display:
                        let yearOfBirth = 2003;
                        let currentYear = new Date().getFullYear();
                        let ageInYears = currentYear - yearOfBirth;
                        let ageInDays = ageInYears * 365;
                        let ageInHours = ageInDays * 24;
                        let yearTurning100 = yearOfBirth + 100;

                                // Your age in days (approximately)
                                // Your age in hours
                                // The year you'll turn 100


                        console.log(`You are approximately ${ageInDays} days old.`);
                        console.log(`You are approximately ${ageInHours} hours old.`);
                        console.log(`You will turn 100 years old in the year ${yearTurning100}.`);

                        //* Task 7.3: Functions 🟡
                        // Function declaration
                        function greet(name) {
                            return `Hello, ${name}!`;
                        }

                        // Function expression
                        const add = function(a, b) {
                            return a + b;
                        };

                        // Arrow function
                        const multiply = (a, b) => a * b;

                        // Arrow function with body
                        const divide = (a, b) => {
                            if (b === 0) {
                                return "Cannot divide by zero";
                            }
                            return a / b;
                        };

                        // Function declaration
                        //*Exercise 2: Build These Functions

                        // area of rectangle
                        let calculateArea = (width, height) => {
                            return (height * width)
                        }

                        // temperature conversion

                        let celsiusToFahrenheit = (celsius) =>{
                            return (celsius * 1.8) + 32
                        }

                        // even or odd
                        let isEven = (number) => 
                            {
                                if (number % 2 === 0){  // checks if reminder is strictly equal to 0 wen divided by 2
                                    console.log(true)
                                }
                                else{
                                    console.log(false)
                                }
                            }

                            let getInitials = (fullName) => {
                                let title = fullName.split(" ");
                                title = title.map(word => word.charAt(0).toUpperCase(0).join(''))
                        return title
                            }
                            let reverseString = (fullName) => {
                                let word = fullName.split("")
                                word = word.reverse().join('')
                                return word
                            }



                        // calculateArea(width, height) - returns area of rectangle
                        // celsiusToFahrenheit(celsius) - converts temperature
                        // isEven(number) - returns true if even, false if odd
                        // getInitials(fullName) - returns initials (e.g., "Amina Otieno" → "AO")
                        // reverseString(str) - reverses a string


                        //*Exercise 3: Default Parameters
                        function greet(name = "Guest", greeting = "Hello") {
                            return `${greeting}, ${name}!`;
                        }

                        console.log(greet());              // Hello, Guest!
                        console.log(greet("Alice"));       // Hello, Alice!
                        console.log(greet("Bob", "Hi"));   // Hi, Bob!
                        // Build: A function calculateTip(bill, tipPercent = 15) that returns the tip amount.

                    let calculateTip = (bill, tipPercent) => { 
                        let cost = bill * 15/100

                        return cost;
                        }


                        //*Task 7.4: Control Flow 🟡
                        //*Exercise 1: If/Else Statements

                        function getGrade(score) {
                        if (years >= 90) {
                            return "greetings Ancestor";
                        } else if (years >= 80) {
                            return "greetings Grandparent";
                        } else if (years >= 70) {
                            return "greetings parent";
                        } else if (years >= 60) {
                            return "greetings youngster";
                        } else {
                            return "greetings baby! ";
                        }
                        }

                        // Exercise 2: Switch Statements

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
                                return "friday";
                            case 6:
                                return "saturday";
                            default:
                            return "Invalid day";
                            break;
                        }
                        }


                        //*Exercise 3: Loops

                        // For loop
                        for (let i = 1; i < 5; i++) {
                            console.log(i);
                        }

                        // While loop
                        let counts = 0;
                        while (counts < 5) {
                            console.log(counts);
                            counts++;
                        }

                        // For...of (arrays)
                        const colors = ["red", "green", "blue"];
                        for (const color of colors) {
                            console.log(color);
                        }

                        //Build these programs:

                        // Print numbers 1-100
                        // Print only even numbers 1-50
                        // FizzBuzz (print "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both)
                        // Print a triangle of stars

                    // print numbers 
                    let btn = document.querySelector("#plus")
                    let i = 0
                    
                    do {
                        i++;
                        console.log(i);
                    }
                    while(i<=100)
                        btn.textContent = i;


                    // Print only even numbers 1-50
            let btns = document.querySelector("#plus1")
            for (let i=0; i<=50; i+=2){
                console.log(i)
                btns.innerHTML= (i)
            }

            // fizzBuzz game  with a prompt 

                let userInput = Number(prompt());
            for (let i = 0; i <= 100; i += 2) {
                if (i % 3 === 0 && i % 5 === 0) console.log(`${i} = fizzBuzz`);
                else if (i % 5 == 0) {
                console.log(`${i} = fizz `);
                } else if (i % 3 === 0) {
                console.log(`${i} = buzz `);
                }
            }


    //*Mini-Project: Calculator 🔴

    function adds(a, b) {
        return a + b;
    }

    function sub(a, b) {
    return a - b;}

    function multi(a, b) {
    return a * b;}

    function div(a, b){
    if (b === 0 ){
        return 'Error'

    }
    return a / b
    }

    function modulo (a, b){
    return a % b
    }

    function power (a, b){
        return a ** b
    }

    function calculate(num1, operator, num2) {
        switch (operator) {
        case "+":
            return adds(num1, num2);
        case "-":
            return sub(num1, num2);
        case "*":
            return multi(num1, num2);
        case "/":
            return div(num1, num2);
        case "%":
            return modulo(num1, num2);
        case "**":
            return power(num1, num2);

        default:
            return "Invalid operator";
        }
    }

    // Test
    console.log(calculate(10, "+", 5));  // 15
    console.log(calculate(10, "-", 5));  // 5
    console.log(calculate(10, "*", 5));  // 50
    console.log(calculate(10, "/", 5));  // 2
    console.log(calculate(10, "/", 0));  // Error message
        
