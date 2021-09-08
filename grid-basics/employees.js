const employeeList = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Howard',
    age: 20,
    sex: 'male',
    score: 34,
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Cobb',
    age: 34,
    sex: 'male',
    score: 38,
  },
  {
    id: 3,
    firstName: 'Mary',
    lastName: 'Jones',
    age: 38,
    sex: 'female',
    score: 68,
  },
  {
    id: 4,
    firstName: 'Betty',
    lastName: 'Patton',
    age: 36,
    sex: 'female',
    score: 75,
  },
  {
    id: 5,
    firstName: 'Hal',
    lastName: 'Morris',
    age: 37,
    sex: 'male',
    score: 84,
  },
  {
    id: 6,
    firstName: 'Lou',
    lastName: 'Davis',
    age: 31,
    sex: 'male',
    score: 60,
  },
  {
    id: 7,
    firstName: 'Polly',
    lastName: 'Winston',
    age: 25,
    sex: 'female',
    score: 48,
  },
  {
    id: 8,
    firstName: 'Nancy',
    lastName: 'Gill',
    age: 37,
    sex: 'female',
    score: 49,
  },
  {
    id: 9,
    firstName: 'Kalvin',
    lastName: 'Anzinger',
    age: 28,
    sex: 'male',
    score: 28,
  },
  {
    id: 10,
    firstName: 'Ted',
    lastName: 'Newman',
    age: 23,
    sex: 'male',
    score: 49,
  },
  {
    id: 11,
    firstName: 'Helen',
    lastName: 'Johnson',
    age: 46,
    sex: 'female',
    score: 58,
  },
  {
    id: 12,
    firstName: 'Paul',
    lastName: 'Young',
    age: 38,
    sex: 'male',
    score: 73,
  },
  {
    id: 13,
    firstName: 'Sue',
    lastName: 'French',
    age: 31,
    sex: 'female',
    score: 63,
  },
  {
    id: 14,
    firstName: 'Frank',
    lastName: 'Gavin',
    age: 33,
    sex: 'male',
    score: 78,
  },
  {
    id: 15,
    firstName: 'Dolly',
    lastName: 'Savage',
    age: 32,
    sex: 'female',
    score: 82,
  },
  {
    id: 16,
    firstName: 'Sal',
    lastName: 'Cooper',
    age: 21,
    sex: 'male',
    score: 62,
  },
  {
    id: 17,
    firstName: 'Oliver',
    lastName: 'Warner',
    age: 38,
    sex: 'male',
    score: 54,
  },
  {
    id: 18,
    firstName: 'Tracy',
    lastName: 'Zander',
    age: 29,
    sex: 'female',
    score: 47,
  },
  {
    id: 19,
    firstName: 'Michael',
    lastName: 'Day',
    age: 22,
    sex: 'male',
    score: 55,
  },
  {
    id: 20,
    firstName: 'Elaine',
    lastName: 'Saurez',
    age: 30,
    sex: 'female',
    score: 48,
  },
];

const reorganizeData = [
  { type: 'sort', field: 'firstName', direction: 'asc' },
  { type: 'filter', field: 'sex', filter: 'female' },
];

const dataDiv = document.querySelector('#dataDiv');
const sortButton = document.querySelector('#sortButton');
const filterButton = document.querySelector('#filterButton');

let currentData = [];

const loadData = (originalData) => {
  currentData.push(...originalData);
};

const sortData = (data) => {
  const sortedData = data.sort((a, b) =>
    a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
  );

  currentData = sortedData;
};

const filterData = (data, field, filter) => {
  const filteredData = data.filter((item) => {
    return item[field].includes(filter);
  });

  currentData = filteredData;
};

const displayData = (data) => {
  const dataForDisplay = data.map((item) => {
    return item.firstName;
  });

  return dataForDisplay.join('<br>');
};

sortButton.addEventListener('click', () => {
  sortData(currentData);
  dataDiv.innerHTML = displayData(currentData);
});

filterButton.addEventListener('click', () => {
  filterData(currentData, 'sex', 'female');
  dataDiv.innerHTML = displayData(currentData);
});

loadData(employeeList);
dataDiv.innerHTML = displayData(currentData);

// const loadData = (data) => {
//   const loadData = data.map((employee) => {
//     return `${employee.firstName}`;
//   });

//   return loadData.join('<br>');
// };

// const printData = (data, location, callback) => {
//   const html = callback(data);
//   location.innerHTML = html;
// };

// printData(employeeList, dataDiv, loadData);

// const getData = (data) => {
//   const rawData = data.map((employee) => {
//     return employee.firstName;
//   });

//   return rawData;
// };

// const sortData = (data) => {
//   const sortedData = data.sort();

//   return sortedData.join('<br>');
// };

// const getEmployeeData = (data) => {
//   return new Promise((resolve, reject) => {
//     if (data.length) {
//       let employeeData = getData(data);
//       resolve(employeeData);
//     } else {
//       reject('No data found');
//     }
//   });
// };

// getEmployeeData(employeeList)
//   .then((data) => {
//     let sorted = sortData(data);
//     return sorted;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(finalData);

// const getEmployeeData = (data, callback) => {
//   let employeeData = getData(data);
//   return callback(employeeData);
// };

// const filterEmployees = (data) => {
//   const list = data
//     .filter((employee) => employee.sex !== 'male')
//     .map((result) => result.firstName)
//     .join('<br>');
//   return list;
// };

// dataDiv.innerHTML = getEmployeeData(employeeList, sortData);

// sortButton.addEventListener('click', () => {
//   dataDiv.innerHTML = getEmployeeData(employeeList, sortData);
// });

// filterButton.addEventListener('click', () => {
//   dataDiv.innerHTML = filterEmployees(employeeList);
// });
