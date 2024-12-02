//Net Salary Calculator
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits; // Calculate Gross Salary
 // Monthly PAYE Tax calculation
 let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1; // 10% for salaries <= 24,000
    } if (grossSalary <= 32333) {
        paye = grossSalary * 0.25; // 25% for salaries <= 32,333
    }if (grossSalary <= 500000) {
        paye = grossSalary * 0.3;  // 30% for salaries <= 500,000
    }if (grossSalary <= 800000) {
        paye = grossSalary * 0.325; // 32.5% for salaries <= 800,000
    } else {
        paye = grossSalary * 0.35; // 35% for salaries above 800,000
    }
}
    // NHIF Deductions
        let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700; // Maximum NHIF deduction
    }
     // SHIF Deductions (standardized as 2.75% of gross salary)
     const shif = Math.min(grossSalary * 0.0275, 1800); // Assume max contribution is 1800

     // NSSF Deductions (standardized as 6% of basic salary or as per limits)
     const nssf = Math.min(basicSalary * 0.06, 1800); // Assume max contribution is 1800


