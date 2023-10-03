//Create an array and object data structure with some data if fifth grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result.

const student = [{
    studentName: "Jafor",
    fatherName: "Faruq",
    motherName: "Fatema",
    roll: 1,
    bangla: 67,
    english: 77,
    math: 98,
    science: 73,
    socialScience: 59,
    religion: 88,
  },
  {
    studentName: "Rafiq",
    fatherName: "Karim",
    motherName: "Tamanna",
    roll: 2,
    bangla: 67,
    english: 74,
    math: 85,
    science: 80,
    socialScience: 69,
    religion: 88,
  },
  {
    studentName: "Roton",
    fatherName: "Jabbar",
    motherName: "Johura",
    roll: 3,
    bangla: 68,
    english: 77,
    math: 85,
    science: 88,
    socialScience: 95,
    religion: 90,
  },
  {
    studentName: "Bari",
    fatherName: "Esrafil",
    motherName: "Mohuki",
    roll: 4,
    bangla: 84,
    english: 93,
    math: 74,
    science: 92,
    socialScience: 83,
    religion: 92,
  },
  {
    studentName: "Mostofa",
    fatherName: "Saiful",
    motherName: "Tinni",
    roll: 5,
    bangla: 73,
    english: 82,
    math: 92,
    science: 71,
    socialScience: 83,
    religion: 92,
  },
  {
    studentName: "Rafiq",
    fatherName: "Karim",
    motherName: "Tamanna",
    roll: 2,
    bangla: 67,
    english: 74,
    math: 85,
    science: 80,
    socialScience: 69,
    religion: 88,
  },
  {
    studentName: "Sohan",
    fatherName: "Riaz",
    motherName: "Fariha",
    roll: 6,
    bangla: 73,
    english: 66,
    math: 55,
    science: 78,
    socialScience: 85,
    religion: 95,
  },
  {
    studentName: "Mizan",
    fatherName: "Helal",
    motherName: "Farzana",
    roll: 7,
    bangla: 67,
    english: 87,
    math: 69,
    science: 70,
    socialScience: 89,
    religion: 86,
  },
  {
    studentName: "Misu",
    fatherName: "Farhad",
    motherName: "Jannat",
    roll: 8,
    bangla: 68,
    english: 77,
    math: 79,
    science: 68,
    socialScience: 70,
    religion: 97,
  },
  {
    studentName: "Rakib",
    fatherName: "Bakkar",
    motherName: "Riya",
    roll: 9,
    bangla: 67,
    english: 77,
    math: 85,
    science: 80,
    socialScience: 69,
    religion: 88,
  },
  {
    studentName: "Billal",
    fatherName: "Harun",
    motherName: "Julia",
    roll: 10,
    bangla: 73,
    english: 83,
    math: 59,
    science: 76,
    socialScience: 95,
    religion: 93,
  },
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
    let checkStudentName = item.studentName === person;
    if (checkStudentName) {
      this.name = item.studentName;
      this.fatherName = item.fatherName;
      this.motherName = item.motherName;
      this.roll = item.roll;
      this.bn = item.bangla;
      this.en = item.english;
      this.math = item.math;
      this.sci = item.science;
      this.socSci = item.socialScience;
      this.reli = item.religion;
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
    Subject         Marks         GPA            Grade
    Bangla          ${jafor.bn}       ${jafor.gpa(jafor.bn)}        ${jafor.grade(jafor.gpa(jafor.bn))}
    English         ${jafor.en}       ${jafor.gpa(jafor.en)}        ${jafor.grade(jafor.gpa(jafor.en))}
    Math            ${jafor.math}     ${jafor.gpa(jafor.math)}      ${jafor.grade(jafor.gpa(jafor.math))}
    Science         ${jafor.sci}      ${jafor.gpa(jafor.sci)}       ${jafor.grade(jafor.gpa(jafor.sci))}
    Social Science  ${jafor.socSci}   ${jafor.gpa(jafor.socSci)}    ${jafor.grade(jafor.gpa(jafor.socSci))}
    Religion        ${jafor.reli}     ${jafor.gpa(jafor.reli)}      ${jafor.grade(jafor.gpa(jafor.reli))}
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