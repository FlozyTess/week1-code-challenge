// Student Grade Generator
 function calculateGrade(marks) {
    if (marks > 79) return "A";
    if (marks >=60) return "B";
    if (marks >=50) return "C";
    if (marks >=40) return "D";
    else return "E"; // grading system based on marks
 }
 for(let n = 0;n < 3; n++){
    let marks = prompt("input marks between(0 and 100):");//prompt to input marks
 
     marks=Number(marks);//converts input from string to number

     
     if(isNaN(marks) || marks < 0 || marks > 100){
        console.log ("Invalid input. Please enter a number between 0 and 100.");//validate the input
        n--; //decrements the counter to allow the user to input marks again
        continue; //skip the rest of the loop and prompt again 
     } 
       console.log(`Grade: ${calculateGrade(marks)}`); // if valid,calculate and log the grade
 }