// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

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
    salary: parseInt(salaryTest)
  }

  employeesArray.push(employeeInfo);

  employeeConfirm = confirm("Do you want to add another employee ?");

}
return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  
  let averageSalary

  for(let i = 0; i < employeesArray.length; i++) {

    totalSalary = totalSalary + employeesArray[i].salary;

    }
    totalSalary = totalSalary / employeesArray.length;

    averageSalary = totalSalary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    })

    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`);

    return totalSalary;
  }

// Select a random employee
  // TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {

  let x = Math.floor(Math.random() * employeesArray.length);

  console.log(`Congratulations to ${employeesArray[x].firstName} ${employeesArray[x].lastName}, our random drawing winner!`);

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
