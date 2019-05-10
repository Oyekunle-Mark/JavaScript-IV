// CODE here for your Lambda Classes

/**
 *  This function takes two arguments,
 *  a maximum and a minimum number and returns a random number
 *  between the given range. The returned value is inclusive of
 *  the max and min numbers.
 */
const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + min) + min);
};

class Person {
  constructor(name, age, location, gender) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor({
    name,
    age,
    location,
    gender,
    specialty,
    favLanguage,
    catchPhrase
  }) {
    super(name, age, location, gender);
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }

  gradeStudent(student) {
    const oldGrade = student.grade;
    student.grade = randomNumberGenerator(1, 100);

    return `${student.name} now has new grade of ${
      student.grade
    }, old grade was ${oldGrade}`;
  }
}

class Student extends Person {
  constructor(studentAttr) {
    super(
      studentAttr.name,
      studentAttr.age,
      studentAttr.location,
      studentAttr.gender
    );
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
    this.grade = studentAttr.grade;
    this.hasGraduated = studentAttr.hasGraduated;
  }

  listsSubjects() {
    return this.favSubjects.join(' ');
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }

  graduate() {
    if (this.grade >= 70) {
      this.hasGraduated = true;
      return `${this.name} has graduated with a grade of ${this.grade}`;
    }

    return `${this.name} does have the minimum grade required to graduate`;
  }
}

class ProjectManager extends Instructor {
  constructor(PMAttr) {
    super(PMAttr);
    this.gradClassName = PMAttr.gradClassName;
    this.favInstructor = PMAttr.favInstructor;
  }

  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standup times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const rowland = new Instructor({
  name: "Rowland",
  location: "New York",
  age: 32,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: "Life is good."
});

const wick = new Student({
  name: "Wick",
  location: "Glasgow",
  age: 27,
  gender: "male",
  previousBackground: "College Student",
  className: "WEBEU2",
  favSubjects: ["JavaScript", "LESS"],
  grade: randomNumberGenerator(1, 100),
  hasGraduated: false
});

const jane = new Student({
  name: "Jane",
  location: "Lisbon",
  age: 21,
  gender: "female",
  previousBackground: "Waitress",
  className: "WEBEU2",
  favSubjects: ["CSS", "HTML"],
  grade: randomNumberGenerator(1, 100),
  hasGraduated: false
});

const leo = new ProjectManager({
  name: "leo",
  location: "Turin",
  age: 43,
  gender: "male",
  favLanguage: "C",
  specialty: "Computer Science",
  catchPhrase: "A little learning is a dangerous thing.",
  gradClassName: "WEBEU1",
  favInstructor: "fred"
});

const sarah = new ProjectManager({
  name: "sarah",
  location: "Nigeria",
  age: 28,
  gender: "female",
  favLanguage: "Python",
  specialty: "FullStack",
  catchPhrase: "Have fun.",
  gradClassName: "WEBEU1",
  favInstructor: "rowland"
});

console.log(rowland.speak());
console.log(fred.demo("Closures"));
console.log(rowland.grade(wick, "Advance CSS"));
console.log(wick.listsSubjects());
console.log(jane.PRAssignment("Semantic HTML"));
console.log(jane.sprintChallenge("Box Model"));
console.log(leo.standUp("LeoWebeu2"));
console.log(sarah.debugsCode(jane, "Redux"));
console.log(fred.gradeStudent(jane));
console.log(sarah.gradeStudent(wick));
console.log(wick.graduate());
