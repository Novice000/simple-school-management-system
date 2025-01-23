import { SchoolManager, Student } from "./classes.js";

const busyBees = new SchoolManager("Busy Bees");
const subjects = ["Math", "Science", "History", "English"];
const studentsData = [
    { name: "Alice", age: 14, grade: 9 },
    { name: "Osita", age: 15, grade: 10 },
    { name: "Charlie", age: 13, grade: 8 },
    { name: "David", age: 14, grade: 9 },
    { name: "Eve", age: 15, grade: 10 },
    { name: "Frank", age: 13, grade: 8 },
    { name: "Grace", age: 14, grade: 9 },
    { name: "Livinus", age: 15, grade: 10 },
    { name: "Efemena", age: 13, grade: 8 },
    { name: "Judy", age: 14, grade: 9 }
];

studentsData.forEach((studentData) => {
    const student = new Student(studentData.name, studentData.age, studentData.grade);
    subjects.forEach(subject => {
        const mark = Math.floor(Math.random() * 100);
        student.register(subject, mark);
    });
    busyBees.registerStudent(student);
});

console.log(busyBees.findStudentByName("Charlie").toString());
const Charlie =  busyBees.getStudentById(2);
const charlieAverage = Charlie?.getAverage();
console.log(`Charlie's average is ${charlieAverage}`);

console.log("\n")

console.log(busyBees.findStudentByName("Alice").toString());
const Alice =  busyBees.getStudentById(0);
const AliceAverage = Alice?.getAverage();
console.log(`Alice average is ${AliceAverage}`);

console.log("\n")

console.log(busyBees.findStudentByName("Eve").toString());
const Eve =  busyBees.getStudentById(4);
const EveAverage = Eve?.getAverage();
console.log(`Eve's average is ${EveAverage}`);
console.log("\n")
console.log(`The average for grade 9 is ${busyBees.getAverageByGrade(9)}`);