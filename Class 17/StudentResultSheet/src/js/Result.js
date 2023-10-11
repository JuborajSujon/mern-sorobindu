function Result() {
  this.result = function (marks) {
    let gpa;
    let grade;

    if (marks >= 0 && marks < 33) {
      gpa = 0;
      grade = "F";
    } else if (marks >= 33 && marks < 40) {
      gpa = 1;
      grade = "D";
    } else if (marks >= 40 && marks < 50) {
      gpa = 2;
      grade = "C";
    } else if (marks >= 50 && marks < 60) {
      gpa = 3;
      grade = "B";
    } else if (marks >= 60 && marks < 70) {
      gpa = 3.5;
      grade = "A-";
    } else if (marks >= 70 && marks < 80) {
      gpa = 4.0;
      grade = "A";
    } else if (marks >= 80 && marks < 100) {
      gpa = 5.0;
      grade = "A+";
    } else {
      gpa = "invalid";
      grade = "invalid";
    }

    return {
      gpacal: gpa,
      gradecal: grade,
    };
  };

  this.finalCgpa = function (bn, en, math, science, socialscience, rel) {
    let totalgpa =
      this.result(bn).gpacal +
      this.result(en).gpacal +
      this.result(math).gpacal +
      this.result(science).gpacal +
      this.result(socialscience).gpacal +
      this.result(rel).gpacal;

    let finalscgpa = totalgpa / 6;
    let finalgrade = "";

    if (
      bn < 33 ||
      en < 33 ||
      math < 33 ||
      science < 33 ||
      socialscience < 33 ||
      rel < 33
    ) {
      finalscgpa = 0;
      finalgrade = "F";
    } else if (finalscgpa >= 1 && finalscgpa < 2) {
      finalgrade = "D";
    } else if (finalscgpa >= 2 && finalscgpa < 3) {
      finalgrade = "C";
    } else if (finalscgpa >= 3 && finalscgpa < 3.5) {
      finalgrade = "B";
    } else if (finalscgpa >= 3.5 && finalscgpa < 4) {
      finalgrade = "A-";
    } else if (finalscgpa >= 4 && finalscgpa < 5) {
      finalgrade = "A";
    } else if (finalscgpa == 5) {
      finalgrade = "A+";
    }

    return {
      rescgpa: finalscgpa.toFixed(2) == 0 ? "" : finalscgpa.toFixed(2),
      resgrade: finalgrade,
    };
  };
}
