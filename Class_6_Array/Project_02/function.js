// Data Stucture format = ['StuName', 'FatherName', 'MotherName', 'roll', 'Bangla', 'English', 'Math', 'Science', 'Social Science', 'Religion']

const student = [
  ["Jafor", "Faruq", "Fatema", 1, 67, 77, 98, 73, 59, 88],
  ["Rafiq", "Karim", "Tamanna", 2, 88, 57, 98, 89, 67, 77],
  ["Roton", "Jabbar", "Johura", 3, 68, 77, 85, 88, 95, 90],
  ["Bari", "Esrafil", "Mohuki", 4, 84, 93, 74, 77, 92, 83],
  ["Mostofa", "Saiful", "Tinni", 5, 73, 82, 92, 71, 83, 92],
  ["Sohan", "Riaz", "Fariha", 6, 73, 66, 55, 78, 85, 95],
  ["Mizan", "Helal", "Farzana", 7, 67, 87, 69, 70, 89, 86],
  ["Misu", "Farhad", "Jannat", 8, 68, 77, 79, 68, 70, 97],
  ["Rakib", "Bakkar", "Riya", 9, 66, 88, 89, 94, 78, 90],
  ["Billal", "Harun", "Julia", 10, 73, 83, 59, 76, 95, 93],
];

function CGPASystem(student, person) {
  this.name = "";
  this.fatherName = "";
  this.motherName = "";
  this.roll = 0;

  this.bn = 0;
  this.en = 0;
  this.math = 0;
  this.sci = 0;
  this.socSci = 0;
  this.reli = 0;
  student.map((item) => {
    let checkStudentName = item.includes(person);
    if (checkStudentName) {
      this.name = item[0];
      this.fatherName = item[1];
      this.motherName = item[2];
      this.roll = item[3];
      this.bn = item[4];
      this.en = item[5];
      this.math = item[6];
      this.sci = item[7];
      this.socSci = item[8];
      this.reli = item[9];
    }
  });

  this.gpa = function (marks) {
    let gpa;
    if (marks >= 0 && marks < 33) {
      gpa = 0;
    } else if (marks >= 33 && marks < 40) {
      gpa = 1;
    } else if (marks >= 40 && marks < 50) {
      gpa = 2;
    } else if (marks >= 50 && marks < 60) {
      gpa = 3;
    } else if (marks >= 60 && marks < 70) {
      gpa = 3.5;
    } else if (marks >= 70 && marks < 80) {
      gpa = 4;
    } else if (marks >= 80 && marks <= 100) {
      gpa = 5;
    }
    return gpa;
  };

  this.grade = function (gpa) {
    let grade = 0;
    if (gpa >= 0 && gpa < 1) {
      grade = "F";
    } else if (gpa >= 1 && gpa < 2) {
      grade = "D";
    } else if (gpa >= 2 && gpa < 3) {
      grade = "C";
    } else if (gpa >= 3 && gpa < 3.5) {
      grade = "B";
    } else if (gpa >= 3.5 && gpa < 4) {
      grade = "A-";
    } else if (gpa >= 4 && gpa < 5) {
      grade = "A";
    } else if (gpa == 5) {
      grade = "A+";
    }
    return grade;
  };

  this.cgpa = function (bn, en, math, sci, socSci, reli) {
    let total_gpa = bn + en + math + sci + socSci + reli;
    let cgpa = total_gpa / 6;

    if (
      bn == 0 ||
      en == 0 ||
      math == 0 ||
      sci == 0 ||
      socSci == 0 ||
      reli == 0
    ) {
      return "You are failed";
    } else {
      return `You are CGPA = ${parseFloat(cgpa).toFixed(
        2
      )} and Grade = ${this.totalGrade(cgpa)}`;
    }
  };

  this.totalGrade = function (cgpa) {
    if (cgpa >= 0 && cgpa < 1) {
      return "F";
    } else if (cgpa >= 1 && cgpa < 2) {
      return "D";
    } else if (cgpa >= 2 && cgpa < 3) {
      return "C";
    } else if (cgpa >= 3 && cgpa < 3.5) {
      return "B";
    } else if (cgpa >= 3.5 && cgpa < 4) {
      return "A-";
    } else if (cgpa >= 4 && cgpa < 5) {
      return "A";
    } else if (cgpa == 5) {
      return "A+";
    }
  };
}

let jafor = new CGPASystem(student, "Jafor");

console.log(`

    Student Name : ${jafor.name}
    Father Name : ${jafor.fatherName}
    Mother Name : ${jafor.motherName}
    Student Roll : ${jafor.roll}
    Subject jafor GPA Grade
    Bangla  ${jafor.bn}  ${jafor.gpa(jafor.bn)}    ${jafor.grade(
  jafor.gpa(jafor.bn)
)}
    English         ${jafor.en}       ${jafor.gpa(
  jafor.en
)}        ${jafor.grade(jafor.gpa(jafor.en))}
    Math            ${jafor.math}     ${jafor.gpa(
  jafor.math
)}      ${jafor.grade(jafor.gpa(jafor.math))}
    Science         ${jafor.sci}      ${jafor.gpa(
  jafor.sci
)}       ${jafor.grade(jafor.gpa(jafor.sci))}
    Social Science  ${jafor.socSci}   ${jafor.gpa(
  jafor.socSci
)}        ${jafor.grade(jafor.gpa(jafor.socSci))}
    Religion        ${jafor.reli}     ${jafor.gpa(
  jafor.reli
)}      ${jafor.grade(jafor.gpa(jafor.reli))}
    -----------------------------------------------------------------------------------------------------------
 CGPA = ${jafor.cgpa(
   jafor.gpa(jafor.bn),
   jafor.gpa(jafor.en),
   jafor.gpa(jafor.math),
   jafor.gpa(jafor.sci),
   jafor.gpa(jafor.socSci),
   jafor.gpa(jafor.reli)
 )}
												
											
`);
