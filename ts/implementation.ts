import { SchoolManager, Student } from "./classes";

const busyBees = new SchoolManager("Busy Bees");
const subjects = ["Math", "Science", "History", "English"];
const studentsData = [
    { name: "Alice", age: 14, grade: 9 },
    { name: "Bob", age: 15, grade: 10 },
    { name: "Charlie", age: 13, grade: 8 },
    { name: "David", age: 14, grade: 9 },
    { name: "Eve", age: 15, grade: 10 },
    { name: "Frank", age: 13, grade: 8 },
    { name: "Grace", age: 14, grade: 9 },
    { name: "Heidi", age: 15, grade: 10 },
    { name: "Ivan", age: 13, grade: 8 },
    { name: "Judy", age: 14, grade: 9 }
];

studentsData.forEach((studentData) => {
    const student = new Student(studentData.name, studentData.age, studentData.grade);
    subjects.forEach(subject => {
        const mark = Math.floor(Math.random() * 100); // Generate random marks for each subject
        student.register(subject, mark);
    });
    busyBees.registerStudent(student);
});

console.log(busyBees.findStudentByName("Charlie"));
const Charlie =  busyBees.getStudentById(2);
const charlieAverage = Charlie?.getAverage();
console.log(charlieAverage);
