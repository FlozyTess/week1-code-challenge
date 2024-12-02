//Net Salary Calculator
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits; // Calculate Gross Salary
// PAYE Calculation
let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1; // 10% for salaries <= 24,000
    } else if (grossSalary <= 32333) {
        paye = (24000 * 0.1) + ((grossSalary - 24000) * 0.25); // 25% for the amount above 24,000
    } else if (grossSalary <= 500000) {
        paye = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3); // 30% for the amount above 32,333
    } else if (grossSalary <= 800000) {
        paye = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.3) + ((grossSalary - 500000) * 0.325); // 32.5% for the amount above 500,000
    } else {
        paye = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.3) + ((800000 - 500000) * 0.325) + ((grossSalary - 800000) * 0.35); // 35% for salaries above 800,000
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
    // NSSF Deductions
    let nssf = 0;
    const EmployeeContributionRate = 0.06; // 6% of pensionable pay
    const EmployerContributionRate = 0.06; // 6% of pensionable pay
    const maxContribution = year >= 2024 ? 7000 : 6000; // maximum contribution

    // Contributions (Employee & Employer)
    if (grossSalary <= maxContribution) {
        nssf += grossSalary * EmployeeContributionRate; // Employee contribution
        nssf += grossSalary * EmployerContributionRate; // Employer contribution
    } else {
        nssf += maxContribution * EmployeeContributionRate; // Employee contribution
        nssf += maxContribution * EmployerContributionRate; // Employer contribution
    }

    
