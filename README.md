# **School Management System**

## **Overview**

This project is a simple **School Management System** built using TypeScript and compiled to javascript. Typescript contained in the `ts` directory and the javascript contained in `js` directory. It provides functionality to manage students, their grades, subjects, and calculate averages. The system is designed with an object-oriented approach, utilizing classes like `Student`, `Subjects`, and `SchoolManager`. A preview of functionalities can be found by just running the `index.js` in the `js` folder. Run

  ```bash
   node ./js/index.js
  ```

to preview functionality.

---

## **Features**

- **Student Registration**: Add students to the school with unique IDs.
- **Subject Management**: Register subjects and assign marks for each student.
- **Grade Filtering**: Retrieve students by their grade(class).
- **Average Calculation**: Calculate the average score for students by grade or for individual students.
- **Data Display**: Print detailed student information, including subjects and marks.

---

## **Classes**

### **1. `Subjects`**

- Handles subject and marks management for students.
- **Key Methods**:
  - `addSubject(subject: string, mark: number)`: Add a subject with a score.
  - `getScore(subject: string)`: Retrieve the score of a specific subject.
  - `avergage()`: Calculate the average score across all subjects.
  - `toString()`: Get a formatted string representation of all subjects and marks.

### **2. `Student`**

- Represents a student with attributes like name, age, grade, and subjects.
- **Key Methods**:
  - `register(subject: string, mark: number)`: Add a subject and mark to the student.
  - `getAverage()`: Calculate the average score across all subjects.
  - `toString()`: Get a detailed representation of the student, including subjects and marks.

### **3. `SchoolManager`**

- Manages all students in the school.
- **Key Methods**:
  - `registerStudent(student: Student)`: Register a new student with a unique ID.
  - `getStudentById(id: number)`: Retrieve a student by their ID.
  - `findStudentByName(name: string)`: Find all students with a specific name.
  - `getStudentsByGrade(grade: number)`: Get all students in a particular grade.
  - `getAverageByGrade(grade: number)`: Calculate the average score for all students in a grade.

---

## **Usage**

### **Setup**

1. Import the classes:

   ```javascript
   import { SchoolManager, Student } from "./classes.js";
   ```

2. Initialize the `SchoolManager`:

   ```javascript
   const busyBees = new SchoolManager("Busy Bees");
   ```

3. Register students and their subjects:

   ```javascript
   const student = new Student("Alice", 14, 9);
   student.register("Math", 90);
   student.register("Science", 85);
   busyBees.registerStudent(student);
   ```

### **Sample Output**

```javascript
console.log(busyBees.findStudentByName("Alice").toString());
```

**Output**:

```text
Id: 0
Name: Alice
Age: 14
Grade: 9
Subjects: {
Math: 90
Science: 85
}
```
