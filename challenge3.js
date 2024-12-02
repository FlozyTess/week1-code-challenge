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
