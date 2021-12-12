DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS `role`;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

CREATE TABLE `role` (
    role_id INT PRIMARY KEY,
    role_title VARCHAR(30),
    role_salary DECIMAL,
    department_id INT
);
