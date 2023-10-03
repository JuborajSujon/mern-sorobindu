//GPA calculation function 
function gpa(marks) {
    let gpa;
    if (marks >= 0 && marks <= 32) {
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
		} else if(marks >= 80 && marks <= 100) {
			gpa = 5;
		}

    return gpa;
}

//GRADE calculation function 
function grade(marks) {
    let grade;
    if (marks >= 0 && marks <= 32) {
			grade = "F";
		} else if (marks >= 33 && marks < 40) {
			grade = "D";
		} else if (marks >= 40 && marks < 50) {
			grade = "C";
		} else if (marks >= 50 && marks < 60) {
			grade = "B";
		} else if (marks >= 60 && marks < 70) {
			grade = "A-";
		} else if (marks >= 70 && marks < 80) {
			grade = "A";
		} else if(marks >= 80 && marks <= 100) {
			grade = "A+";
		}

    return grade;
}

//CGPA function

function CGPA(bn, en, math, sci, socSci, reli) {

    let total_gpa = ( bn + en + math + sci + socSci + reli );
    let cgpa = total_gpa/CGPA.length
    if (bn == 0||en == 0|| math == 0 || sci == 0 || socSci == 0 || reli == 0) {
        return 'You are failed'
    } else {
        return `You are CGPA = ${parseFloat(cgpa).toFixed(2)} and Grade = ${totalGrade(cgpa)}`;
    }
}


//Total grade
function totalGrade (cgpa){
    
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
}

// function ageCal (name, age) {
//     return ""
// }

// let ageCal = function (name, age) {
//     return ""
// }

// let ageCal = (name, age) => {
//     return ""
// }

// let ageCal = () => "I am arrow function"


//Constructor function
function Student () {
    this.name = "Asraful Haque"
    this.age = 20;
    this.skill = 'Python'
    this.agecal = function (){
        return ''
    }
    this.gpa = function () {
        return ""
    }

    this.grade = function () {
        return ""
    }
}

function Utility () {
    this.ageCal = function (name, year) {
        return `Hi ${name} , you are ${(new Date().getFullYear()) - year} olds`
    }

    this.currency = function (type, amount) {
        if(type == "d"){
            return amount * 86
        }
    }

    this.areaCal = function (type, width, length, height) {
        if(type == "s"){
            return 
        }
    }
}

const utility = new Utility();

let yourAge = utility.ageCal("Md. Sujon Miah", 1990)
console.log(yourAge)