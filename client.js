const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

function bonusCalculation(employee) {
  const newArray = [];
  const people = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  };
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// loop to run through all of the employees
// loop through the employees array and console log was item on a new line
for (let i = 0; i < employees.length; i++) {
  // make employee data the output for the index of the array of employees
  const employeeData = employees[i];

  // log out the employee data that reflects index of the employee data that was stored earlier
  const result = bonusCalculator(employeeData);
  console.log(result);
}

// function that will produce the bonus based upon the view rating and annual salary
function bonusCalculator(employees) {
  //console.log(employees);
  let percentBonus = 0;

  // conditional for percentBonus
  if (employees.reviewRating === 3) {
    percentBonus = 4;
  } else if (employees.reviewRating === 4) {
    percentBonus = 6;
  } else if (employees.reviewRating === 5) {
    percentBonus = 10;
  } else if (employees.reviewRating <= 2) {
    percentBonus = 0;
  }

  // checking to see if the employees number string is 4 characters long
  // use the .length method to find the answer and raise the percent of the bonus by 5
  if (employees.employeeNumber.length === 4) {
    // resets the current bonus value and addd the new value to it
    percentBonus += 5;
  }

  // if the employees has a salary that is greater than 65000
  // subtract 1 from there percentBonus
  // employees.annualSalary > 65000
  if (Number(employees.annualSalary) > 65000) {
    percentBonus -= 1;
  }
  // no bonus can be greater than 13, reset to 13 if it is
  // no bonus can be less than 0, reset to 0 if it is
  if (percentBonus > 13) {
    percentBonus = 13;
  } else if (percentBonus < 0) {
    percentBonus = 0;
  }

  /* TODO
    need to create a function for employees.totalCompensation
    totalCompensation = annualSalary + totalBonus
    need to create a function for employees.totalBonus
    totalBonus = bonusPercent / 100 * employees.annualSalary
  */
  const totalBonus = total(percentBonus, employees.annualSalary);
  const totalCompensation = compensation(employees.annualSalary, totalBonus);
  return {
    name: employees.name,
    // output the bonus percent calculator function in the if statement conditionals
    bonusPercentage: percentBonus,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  };
}
// function for totalCompensation
function compensation(annualSalary, percentBonus) {
  // make the annualSalary a whole number the round up to the nearest dollar
  // we do it here to make sure that someone behind this code understand what this function is doing
  // in addition to that we make it a number here so that it is easy to trouble shoot for later use.
  const wholeNumber = Number(annualSalary);
  return wholeNumber + percentBonus;
}

// function for totalBonus
function total(percentBonusWhole, annualSalary) {
  const bonusAsDecimal = percentBonusWhole / 100;
  // Math.round() method rounds the decimal to the nearest dollar amount
  return Math.round(bonusAsDecimal * annualSalary);
}

/*  WHAT WE ATTEMPTED AS PAIRED GROUP
  // totalBonus for each employee, output to their dot operator value
  for (person of employee) {
    // if statement for person.reviewRating is less than or equal to 2 receive no bonus
    if (person.reviewRating <= 2) {
      people.totalBonus = 0;
      newArray.push(people);
      // condition for a rating of 3
    } else if (person.reviewRating === 3) {
      people.totalBonus = 0.04 * employee.annualSalary;
      newArray.push(people);
    }
  }
  return newArray;
  */

console.log(employees);
