// Student Grade Generator
 function calculateGrade(marks) {
    if (marks > 79) return "A";
    if (marks >=60) return "B";
    if (marks >=50) return "C";
    if (marks >=40) return "D";
    else return "E"; // grading system based on marks
 }
 
 const inputs = [-5, 67, 42,90,101,20]; // Replace with desired marks
 for (let n = 0; n < inputs.length; n++) {
    const marks = inputs[n];
     
     if(marks < 0 || marks > 100){
        console.log ("Invalid input. Please enter a number between 0 and 100.");//validate the input
        continue; //skip to the next iteration if invalid 
     } 
       console.log(`Grade: ${calculateGrade(marks)}`); // if valid,calculate and log the grade
      
 }

 