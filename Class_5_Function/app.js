let name = prompt('Student Name');
let roll = Number(prompt('Roll'));

let bn = Number(prompt('Bangla'));
let en = Number(prompt("English"));
let math = Number(prompt("Math"));
let sci = Number(prompt("Science"));
let socSci = Number(prompt("Social Science"));
let reli = Number(prompt("Religion"));

// To convert a string to a number using JavaScript 
/**
 * Using the Number() function 
 * Using the parseInt() function 
 * Using the parseFloat() function 
 * Using the unary plus operator (+)
 * Multiplying the string by the number 1
 * Dividing the string by the number 1
 * Subtracting the number 0 from the string 
 * Using the bitwise NOT operator (~~)
 * Using the Math.floor() function
 * Using the Math.ceil() function
 * Using the Math.round() function
 */



console.log(`

    Student Name : ${name}
    Student Roll : ${roll}
    Subject         Marks       GPA         Grade
    Bangla          ${bn}           ${gpa(bn)}            ${grade(bn)}
    English         ${en}           ${gpa(en)}            ${grade(en)}
    Math            ${math}           ${gpa(math)}            ${grade(math)}
    Science         ${sci}           ${gpa(sci)}            ${grade(sci)}
    Social Science  ${socSci}           ${gpa(socSci)}            ${grade(
	socSci
)}
    Religion        ${reli}           ${gpa(reli)}            ${grade(reli)}
    ----------------------------------------------------------------------------------------
                                    CGPA = ${CGPA(gpa(bn),gpa(en),gpa(math),gpa(sci),gpa(socSci),gpa(reli))}
`);


