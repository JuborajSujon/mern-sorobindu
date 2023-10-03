function CGPASystem (name, roll, bangla, english, math, science, socScience, religion) {
	this.name = name
	this.roll = Number(roll)

	this.bn = Number(bangla);
	this.en = Number(english);
	this.math = Number(math);
	this.sci = Number(science);
	this.socSci = Number(socScience);
	this.reli = Number(religion);

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
		if (gpa >=0 && gpa <1) {
			grade = "F";
		} else if (gpa >=1 && gpa < 2){
			grade = "D";
		} else if (gpa >=2 && gpa < 3){
			grade = "C";
		} else if (gpa >=3 && gpa < 3.5){
			grade = "B";
		} else if (gpa >=3.5 && gpa < 4){
			grade = "A-";
		} else if (gpa >=4 && gpa < 5){
			grade = "A";
		} else if (gpa == 5) {
			grade = "A+";
		}
		return grade;
	};

	this.cgpa = function (bn, en, math, sci, socSci, reli) {
		let total_gpa = bn + en + math + sci + socSci + reli
		let cgpa = total_gpa/6

		if (bn == 0 || en == 0 || math == 0 || sci == 0 || socSci == 0 || reli == 0){
			return "You are failed";
		} else {
			return `You are CGPA = ${parseFloat(cgpa).toFixed(2)} and Grade = ${this.totalGrade(cgpa)}`;
		}
	};

	this.totalGrade = function (cgpa){
    
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

