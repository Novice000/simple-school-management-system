class Person {
    constructor() {
        if (this.constructor === Person) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
}
class Subjects {
    constructor() {
        this.subjectsMap = new Map();
    }
    addSubject(subject, mark = 0) {
        this.subjectsMap.set(subject, mark);
    }
    getScore(subject) {
        var _a;
        return (_a = this.subjectsMap.get(subject)) !== null && _a !== void 0 ? _a : undefined;
    }
    avergage() {
        let sum = 0;
        this.subjectsMap.forEach((value, key) => {
            sum += value;
        });
        return sum / this.subjectsMap.size;
    }
    toString() {
        let str = "";
        this.subjectsMap.forEach((value, key) => {
            str += `${key}: ${value}\n`;
        });
        return str;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super();
        this.id = undefined;
        this.name = name;
        this.age = age;
        this.subjects = new Subjects();
        this.grade = grade;
    }
    register(subject, mark = 0) {
        this.subjects.addSubject(subject, mark);
    }
    setStudentId(id) {
        this.id = id;
    }
    get getStudentId() {
        return this.id;
    }
    getAverage() {
        return this.subjects.avergage();
    }
    getScore(subject) {
        return this.subjects.getScore(subject);
    }
    getSubjects() {
        return this.subjects;
    }
    toString() {
        const subjectsInfo = this.subjects.toString();
        return `Id: ${this.id}\nName: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}\nSubjects: {\n${subjectsInfo}}`;
    }
}
class SchoolManager {
    constructor(name) {
        this.students = [];
        this.studentsCount = 0;
        this.schoolName = name;
        this.students = [];
        this.studentsCount = 0;
    }
    get getSchoolName() {
        return this.schoolName;
    }
    set setSchoolName(name) {
        this.schoolName = name;
    }
    registerStudent(student) {
        student.setStudentId(this.studentsCount);
        this.students.push(student);
        this.studentsCount++;
        console.log(`Student ${student.name} registered in ${this.schoolName} with id ${student.getStudentId}`);
    }
    getStudentById(id) {
        return this.students.find((student) => student.getStudentId === id);
    }
    findStudentByName(name) {
        return this.students.filter((student) => student.name === name);
    }
    getStudentsByGrade(grade) {
        return this.students.filter((student) => student.grade === grade);
    }
    getAverageByGrade(grade) {
        const students = this.getStudentsByGrade(grade);
        if (students.length === 0)
            return 0;
        const sum = students.reduce((total, student) => total + student.getAverage(), 0);
        return sum / students.length;
    }
}
export { Student, SchoolManager };
