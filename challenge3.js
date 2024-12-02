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
// SHIF Deductions
}