abstract class Person {
    constructor() {
        if (this.constructor === Person) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    abstract name: string
    abstract age: number
}

class Subjects {
  private subjectsMap: Map<string, number> = new Map();
  addSubject(subject: string, mark: number = 0) {
    this.subjectsMap.set(subject, mark);
  }

  getScore(subject: string) {
    return this.subjectsMap.get(subject) ?? undefined;
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
  private id: number | undefined;
  name: string;
  age: number;
  grade: number;
  private subjects: Subjects;
  constructor(name: string, age: number, grade: number) {
    super();
    this.id = undefined;
    this.name = name;
    this.age = age;
    this.subjects = new Subjects();
    this.grade = grade;
  }

  register(subject: string, mark: number = 0) {
    this.subjects.addSubject(subject, mark);
  }

  setStudentId(id: number) {
    this.id = id;
  }

  get getStudentId() {
    return this.id;
  }

  getAverage() {
    return this.subjects.avergage();
  }
  getScore(subject: string) {
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
  schoolName: string;
  students: Student[] = [];
  studentsCount: number = 0;

  constructor(name: string) {
    this.schoolName = name;
    this.students = [];
    this.studentsCount = 0;
  }

  get getSchoolName() {
    return this.schoolName;
  }

  set setSchoolName(name: string) {
    this.schoolName = name;
  }

  registerStudent(student: Student) {
    student.setStudentId(this.studentsCount);
    this.students.push(student);
    this.studentsCount++;
    console.log(
      `Student ${student.name} registered in ${this.schoolName} with id ${student.getStudentId}`
    );
  }

  getStudentById(id: number) {
    return this.students.find((student) => student.getStudentId === id);
  }

  findStudentByName(name: string) {
    return this.students.filter((student) => student.name === name);
  }

  getStudentsByGrade(grade: number) {
    return this.students.filter((student) => student.grade === grade);
  }

  getAverageByGrade(grade: number) {
    const students = this.getStudentsByGrade(grade);
    if (students.length === 0) return 0;

    const sum = students.reduce(
      (total, student) => total + student.getAverage(),
      0
    );
    return sum / students.length;
  }
}


export { Student, SchoolManager }