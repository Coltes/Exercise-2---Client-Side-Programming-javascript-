// Part 1: Variables and Constants
let userAge = 23; // initialize a variable for the user's age
const userHeight = 182; // initialize a constant for the user's height
console.log("User's Age:", userAge);
console.log("User's Height:", userHeight);

// Part 2: Arrays
let petNames = ["Stuart", "Clarice", "Blossom"]; // Declare an array with three pet names
console.log("Initial Pet Names:", petNames);

petNames.push("Ella"); // Add a new element
console.log("After push:", petNames);

petNames.pop(); // Remove the last element
console.log("After pop:", petNames);

petNames.reverse(); // Reverse the array
console.log("Reversed Pet Names:", petNames);

// Part 3: Objects
let car = {
    make: "Subaru",
    model: "WRX",
    year: "2019",
}; 

console.log("Initial Car Object:", car);

car.year = 2024; // Update one of the object's properties
console.log("Updated Car Year:", car);

car.color = "Black"; // Add a new property
console.log("Updated Car Object with new property:", car);