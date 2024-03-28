// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// const employeesArray = [];

// 

// let i = 0;

// do{
// for(i = 0; i < 2; i++){
//   

//   employeeInfo = window.confirm("Do you want to add another employee ?");
//   if(employeeInfo){
//   }else {
//     i = 2;
//   }
// }
//   i++;
//   if(employeeInfo){
//     employeeInfo = window.confirm("Do you want to add another employee ?");
//   }
// }while(employeeInfo);
// console.log(employeesArray);
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];

  let employeeConfirm = true;

while(employeeConfirm){

  let fName = prompt("Enter employee's First Name:");

  let lName = prompt("Enter employee's Last Name:");

  let salaryTest = prompt("Enter employee's Salary:");

  if(isNaN(salaryTest)) {
    salaryTest = 0;
  }

  const employeeInfo = {
    firstName: fName,
    lastName: lName,
    salary: salaryTest
  }

  employeesArray.push(employeeInfo);

  employeeConfirm = confirm("Do you want to add another employee ?");

}
return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
