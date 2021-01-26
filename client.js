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
}

console.log(bonusCalculation(employees));

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
