const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
  ];

// "Удвоение зарплаты" У вас есть массив объектов, представляющих сотрудников с полями "имя" и "зарплата". 
// Используя метод map, удвойте зарплату каждого сотрудника.

const doubledSalaries = employees.map(employee => ({ 
    name: employee.name, 
    salary: employee.salary * 2 
    }));
console.log(doubledSalaries);


// "Фильтрация сотрудников" Используя метод filter, 
// отфильтруйте сотрудников, у которых зарплата выше 5500.

const employeeFiltering = employees.filter(employee => employee.salary > 5500);
console.log(employeeFiltering);


// "Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.

const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log(totalSalary);


// "Имена в верхнем регистре" Используя метод map, 
// преобразуйте имена всех сотрудников к верхнему регистру.

const upperCaseNames = employees.map(employee => ({ name: employee.name.toUpperCase(), salary: employee.salary }));
console.log(upperCaseNames);
