// let name = prompt('Student Name');
// let roll = prompt('Student Roll No.');

// let bn = Number(prompt("Marks at Bangla"))
// let en = Number(prompt("Marks at English"))
// let math = Number(prompt("Marks at Math"))
// let sci = Number(prompt("Marks at Science"))
// let socSci = Number(prompt("Marks at Social Science"))
// let reli = Number(prompt("Marks at Religion"))


const anas = new CGPASystem ("Anas",1,56,56,78,90,67,56);
console.log(`

    Student Name : ${anas.name}
    Student Roll : ${anas.roll}
    Subject anas GPA Grade
    Bangla          ${anas.bn}       ${anas.gpa(anas.bn)}        ${anas.grade(
	anas.gpa(anas.bn)
)}
    English         ${anas.en}       ${anas.gpa(anas.en)}        ${anas.grade(
	anas.gpa(anas.en)
)}
    Math            ${anas.math}     ${anas.gpa(anas.math)}      ${anas.grade(
	anas.gpa(anas.math)
)}
    Science         ${anas.sci}      ${anas.gpa(anas.sci)}       ${anas.grade(
	anas.gpa(anas.sci)
)}
    Social Science  ${anas.socSci}   ${anas.gpa(anas.socSci)}        ${anas.grade(
	anas.gpa(anas.socSci)
)}
    Religion        ${anas.reli}     ${anas.gpa(anas.reli)}      ${anas.grade(
	anas.gpa(anas.reli)
)}
    -----------------------------------------------------------------------------------------------------------
 CGPA = ${anas.cgpa(anas.gpa(anas.bn),anas.gpa(anas.en),anas.gpa(anas.math),anas.gpa(anas.sci),anas.gpa(anas.socSci),anas.gpa(anas.reli))}
												
											
`);